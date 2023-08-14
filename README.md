# eNiru Online Store

Welcome to the eNiru Online Store! This is a React-based e-commerce web application that allows users to browse and purchase products, manage their cart, and save items to their wishlist.

## Features

- Browse and view detailed product information
- Add products to the cart
- View and manage the cart contents
- Add products to the wishlist
- View and manage the wishlist contents
- Calculate discounted prices
- Place orders (future feature)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/eniru-online-store.git
   cd eniru-online-store

2. Install dependencies:

npm install

3. Start the development server:

npm start

Open your web browser and navigate to http://localhost:3000 to access the application.

## Dependencies
This project uses the following major dependencies:

React: A JavaScript library for building user interfaces
Redux: A state management library for managing application-level state
react-router-dom: A routing library for React applications
axios: A promise-based HTTP client for making API requests
react-toastify: A notification library for displaying toast messages


## Directory Structure
The project structure is organized as follows:

src: Contains the source code for the application
actions: Redux action creators for fetching products and managing the cart/wishlist
components: Reusable React components
pages: Individual page components (e.g., Home, ProductDetail, Cart)
reducers: Redux reducers for managing application state
styles: CSS modules for styling components
App.js: The main application component
index.js: Entry point of the application