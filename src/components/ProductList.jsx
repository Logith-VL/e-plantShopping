import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <main className="product-page">
      <section className="products-header">
        <h1>Our Plants</h1>
        <p>
          Discover beautiful houseplants for every room and lifestyle.
        </p>
      </section>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {categoryPlants.map((plant) => (
                <article className="plant-card" key={plant.id}>
                  {plant.image}

                  <div className="plant-card-content">
                    <h3>{plant.name}</h3>

                    <p className="plant-description">
                      {plant.description}
                    </p>

                    <p className="plant-price">
                      ${plant.price.toFixed(2)}
                    </p>

                    <button
                      type="button"
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ProductList;
