# 📊 user-dashboard

A modern, responsive, and feature-rich User & Admin Dashboard built using **React**, styled with **Tailwind CSS**, and powered by **Redux Toolkit** for centralized product management. This application showcases clean UI patterns for analytics, customer tracking, and inventory workflow.

## 🚀 Live Demo
🔗 [https://user-dashboard19.netlify.app/](https://user-dashboard19.netlify.app/)

---

## ✨ Features

- **📊 Interactive Sales Graph:** Visualized business performance and sales analytics using dynamic charts.
- **📦 Product Management:**
  - Comprehensive Product View for admins to browse inventory.
  - Ability to **Add New Products** smoothly with instant dashboard updates.
- **👥 Customer Information Directory:** Detailed tracking of customer lists, user profiles, and metrics.
- **⚙️ Admin Profile Setup:** Dedicated profile section showcasing administrative user credentials and settings.
- **🎨 Modern UI/UX:** Fully responsive layout built with **Tailwind CSS**, optimized for mobile, tablet, and desktop screens.

---

## 🏗️ Architecture & State Management

To ensure optimum performance and a professional codebase, this project uses a hybrid state management approach:
- **Local State (`useState`):** Used across UI components, graphs, tabs, and local forms to keep the components lightweight and performant.
- **Global State (Redux Toolkit):** Specifically implemented to handle the global **Product Add/Creation** workflow, ensuring that the main inventory state updates globally across the dashboard seamlessly.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **State Management:** Redux Toolkit (RTK) & React Context/Hooks (`useState`)
- **Styling:** Tailwind CSS
- **Icons & Charts:** React Icons / Recharts
- **Environment:** Vite

---

## ⚙️ Installation & Setup Instructions

Follow these steps to run the project locally on your machine:

## ⚙️ Installation & Setup Instructions

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
Clone this repository to your local machine, open the project folder in your terminal, and run the following commands:

### 2. Install Dependencies
```bash
npm install

### 3. Start the Development Server
```bash
npm run dev

Project Structure Overview

src/
├── components/     # Reusable UI elements (Sidebar, Products, Orders, Customer)
├── store/          # Redux central store configuration
├── slices/         # Redux slices (specifically for Product Add logic)
├── pages/          # Main views: Login, Dashboard
├── App.jsx         # Application routing and main wrapper
└── main.jsx        # App entry point








