
# Paradise Nursery - e-plantShopping

## Project Description

Paradise Nursery is a React-based online plant shopping application that allows users to browse and purchase houseplants.

The application provides a simple and interactive shopping experience where users can explore different categories of plants, add plants to their shopping cart, and manage their cart quantities.

## Project Name

e-plantShopping

## Technologies Used

- React
- JavaScript
- Vite
- Redux Toolkit
- React Router
- CSS

## Features

- Paradise Nursery landing page
- Navigation between Home, Plants, and Cart
- Plant categories
- Dynamic plant product cards
- Plant images, names, descriptions, and prices
- Add to Cart functionality
- Disabled Add to Cart button after adding a product
- Dynamic cart item count
- Increase and decrease cart quantities
- Delete products from the cart
- Individual product total calculation
- Overall cart total calculation
- Continue Shopping functionality
- Checkout button with Coming Soon message
- Responsive design

## Plant Categories

The application includes three plant categories:

1. Aromatic Plants
2. Medicinal Plants
3. Air Purifying Plants

Each category contains six unique houseplants.

## Project Structure

```text
e-plantShopping
├── src
│   ├── components
│   │   ├── AboutUs.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   ├── data
│   │   └── plants.js
│   ├── redux
│   │   └── CartSlice.jsx
│   ├── App.jsx
│   └── App.css
├── README.md
└── package.json