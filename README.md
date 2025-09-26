# 🍽️ **Tomato – Full-Stack Food Delivery Web App**

A modern **food delivery platform** built with the **MERN Stack** (MongoDB, Express, React, Node.js).
Customers can explore menus, add items to their cart, place orders, track delivery status, and make secure payments — all in one responsive web app.
Includes a **dedicated Admin Panel** for managing menu items and orders, and multiple **encryption layers** to ensure user and payment security.

🚀 **Live Demo:** [food-del-frontend-7vmr.onrender.com](https://food-del-frontend-7vmr.onrender.com)

---

## 🔍 **Features**

### 👤 User Side

* 🍔 **Browse & Search:** View food items by category
* 🛒 **Smart Cart:** Add items to cart (local + server sync)
* 📦 **Order Tracking:** Real-time status updates
* 💳 **Secure Payments:** Integrated payment gateway (Stripe)
* 🔐 **User Authentication & Encryption:**

  * Passwords encrypted in backend
  * Sensitive data encrypted in frontend before API calls
  * Token-based authentication with JWT
  * LocalStorage cart data encrypted for extra security
* 📱 **Responsive UI:** Optimized for mobile & desktop

### 🛠 Admin Panel

* 📑 Add / edit / delete menu items
* 📦 Manage customer orders (update status)
* 📊 View sales & order analytics

---

## 🛠️ **Tech Stack**

### Frontend (User + Admin):

* React.js 18 (Vite for fast builds)
* React Router 7
* Context API for global state management
* Axios for API calls
* Crypto-JS for frontend encryption (4-layer security)
* Custom CSS for styling

### Backend API:

* Node.js + Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Backend data encryption for sensitive info
* Stripe payment integration
* Hosted on Render

### Other Tools:

* LocalStorage for offline cart persistence (encrypted)
* RESTful API architecture
* CORS & security middleware

---

## 📂 **Project Structure**

```
tomato-food-app/
├── frontend/       # React customer-facing app
├── admin-panel/    # React admin dashboard
└── backend/        # Node.js + Express + MongoDB API
```

---

### 🌟 **Highlights**

* **Smart Cart Merge:** Local cart items automatically sync with server after login
* **Admin Dashboard:** Manage menu items & orders in real time
* **4-Layer Encryption:** Frontend + backend data encryption, secure JWT, encrypted local storage
* **Full-Stack Deployment:** Deployed on Render with a production-ready build
* **Scalable Architecture:** Clean separation of frontend, admin, and backend

---
