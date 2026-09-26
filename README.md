# React JS Blog - v4: React Router & Context API

Welcome to the fourth version of the React JS Blog project! This iteration introduces client-side routing for navigation and overhauls the state management system using the Context API to eliminate prop drilling.

## 🚀 Project Overview

In this stage, the application transforms into a true Single Page Application (SPA). By integrating **React Router**, users can navigate between different pages seamlessly without browser reloads. Additionally, the **Context API** (`DataProvider`) is implemented to manage global state, making data accessible to any component directly without passing props down the component tree.

## 🛠️ Tech Stack & Concepts Used

- **React.js**: Functional components.
- **React Router DOM**: For client-side routing and navigation.
- **Context API (`DataContext`)**: For global state management.
- **Axios & Custom Hooks**: `useAxiosFetch` and `useWindowSize` (carried over from v3).
- **JSON-Server**: Mock REST API database.

## ✨ Features

- **Client-Side Routing**: Dedicated routes for `/` (Home), `/post` (New Post), `/post/:id` (Post Details), `/edit/:id` (Edit Post), and `/about`.
- **404 Missing Page**: A catch-all route (`*`) that handles undefined URLs gracefully.
- **Global State Management**: The `<DataProvider>` wraps the application routes, providing posts, search state, and API data globally.
- **No More Prop Drilling**: Components request only the specific data they need directly from the Context, resulting in a much cleaner and maintainable codebase.
- **Full CRUD Operations**: Users can view all posts, read individual posts, create new ones, edit existing ones, and delete them.

## 📝 What I Learned

- Implementing SPA routing using `react-router-dom` (using components like Routes, Route, Link, and hooks like useParams, useNavigate).
- Identifying the "Prop Drilling" problem and solving it effectively using React's Context API.
- Providing and consuming global state using `createContext` and the `useContext` hook.
- Structuring a more complex React application with contexts, hooks, APIs, and routes combined.

## ⚙️ How to Run Locally

1. Clone the repository and switch to the correct branch for version 4.
2. Open your terminal in the project directory and install dependencies: `npm install`
3. Open a separate terminal window to start the mock database: `npx json-server -p 3500 -w data/db.json`
4. In the first terminal window, start the React app: `npm start`