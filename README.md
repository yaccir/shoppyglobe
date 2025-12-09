# ShoppyGlobe E-commerce Application

A simple e-commerce application built using **React + Vite**, demonstrating component structure, routing, Redux state management, data fetching, event handling, and performance optimization.

---

## 📌 Project Overview

ShoppyGlobe is a basic e-commerce application where users can:

* Browse products
* View product details
* Add/remove items from the cart
* Adjust cart item quantities
* Search products
* Checkout using a dummy checkout form



---

## 🚀 Features

### ✔ Component Structure

* **App** – Root component
* **Header** – Contains navigation & cart icon
* **ProductList** – Shows products fetched from API
* **ProductItem** – Displays individual product details
* **ProductDetail** – Dynamic page to show product info
* **Cart** – Contains added items
* **CartItem** – Renders each item in the cart
* **NotFound** – Custom 404 page
* **Checkout** – Dummy form + order summary

---

## 🔗 API Used

Product data fetched from:

```
https://dummyjson.com/products
```

Custom hooks and useEffect used for fetching the product list and product detail.

---

## 🧰 State Management (Redux)

Implemented using Redux Toolkit:

* Add to cart
* Remove from cart
* Update quantity (not below 1)
* Product search using Redux state

---

## 🔀 Routing (React Router v6)

Routes:

* `/` – Home (ProductList)
* `/product/:id` – Product Detail
* `/cart` – Cart page
* `/checkout` – Checkout
* `*` – NotFound

Uses **createBrowserRouter** for modern features.

---

## 📦 Performance Optimization

* Code splitting using **React.lazy + Suspense**
* Lazy-loaded components
* Lazy loading for images

---

## 🎨 Styling

* Responsive CSS
* Clean, simple UI design

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── NotFound.jsx
│   └── Checkout.jsx
│
├── redux/
│   ├── cartStore.js
│   └── cartSlice.js
        cartSlice.js
│

│
├── App.jsx
└── main.jsx
```

---

## 🧪 Error Handling

* Proper error states for failed fetch
* 404 Page with error details

---

## 📜 Submission Guidelines Followed

✔ Vite used for project creation
✔ Proper indentation & comments
✔ Node modules removed before submission
✔ 25+ meaningful commits
✔ GitHub repository included

---

## 🔗 GitHub Repository

👉 **Repository Link:** (https://github.com/yaccir/shoppyglobe)

---

## 📦 Running the Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start development server

```
npm run dev
```

### 3️⃣ Build for production

```
npm run build
```

---

## 🛠 Working of the Application

### 🔹 1. Home Page (ProductList)

* Fetches all products from **dummyjson API** using a custom hook and `useEffect`.
* Products are displayed in a grid using the **ProductItem** component.
* Search bar filters products globally using **Redux state**.

### 🔹 2. Product Detail Page

* When the user clicks a product, route navigates to `/product/:id`.
* `useEffect` fetches product details using the ID.
* Shows complete information: title, price, description, rating, brand, image.
* User can add the product to the cart.

### 🔹 3. Cart Page

* Displays all added items using **CartItem** component.
* Quantity can be increased/decreased (minimum 1).
* Items can be removed using Redux actions.
* Total price updates automatically.

### 🔹 4. Checkout Page

* Contains a form to collect user information (dummy form).
* Shows order summary.
* Clicking **Place Order**:

  * Clears the cart using Redux.
  * Shows success message: *"Order Placed"*.
  * Redirects automatically to Home.

### 🔹 5. Error Handling

* If any API request fails, a message appears on UI.
* Invalid route shows a custom **404 NotFound Page**.

### 🔹 6. Code Splitting

* All components such as ProductDetail, Cart, Checkout are lazily loaded using `React.lazy` + `Suspense`.
* Images are also lazy loaded for performance.



### 🔹 7. Responsive Design

* Fully responsive using pure CSS.
* Works on mobile, tablet, and large screens.

## 🎉 Conclusion

This project demonstrates practical implementation of:

* React component architecture
* API data fetching
* Redux state management
* Routing
* Performance optimization

Feel free to extend this project further by adding:

* User authentication
* Payment gateway integration
* Wishlist functionality

---


