import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!");
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Your Shopping Cart</h1>
          <p>Your cart is currently empty.</p>
          <Link to="/plants" className="continue-shopping-button">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-header">
        <h1>Shopping Cart</h1>
        <p>Review your plants and manage your order.</p>
      </section>

      <section className="cart-items">
        {cartItems.map((item) => {
          const itemTotal = item.price * item.quantity;

          return (
            <article className="cart-card" key={item.id}>
              {item.image}

              <div className="cart-item-details">
                <h2>{item.name}</h2>

                <p className="cart-unit-price">
                  Unit Price: ${item.price.toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => handleDecrease(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => handleIncrease(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <p className="cart-item-total">
                  Plant Total: ${itemTotal.toFixed(2)}
                </p>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          );
        })}
      </section>

      <section className="cart-summary">
        <h2>Total: ${totalAmount.toFixed(2)}</h2>

        <div className="cart-actions">
          <Link
            to="/plants"
            className="continue-shopping-button"
          >
            Continue Shopping
          </Link>

          <button
            type="button"
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
}

export default CartItem;
