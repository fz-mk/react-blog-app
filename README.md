# React JS Blog - v3: Axios & Custom Hooks

Welcome to the third version of the React JS Blog project! In this iteration, the focus shifts towards code refactoring, cleaner data fetching, and logic reusability by introducing Axios and React Custom Hooks.

## 🚀 Project Overview

While the previous version successfully fetched data using the native Fetch API, this stage upgrades the HTTP client to **Axios** for more robust and streamlined requests. Furthermore, complex logic—such as data fetching and responsive window measurements—has been abstracted out of the components and into dedicated **Custom Hooks** (`useAxiosFetch` and `useWindowSize`).

## 🛠️ Tech Stack & Concepts Used

- **React.js**: Functional components.
- **Axios**: A promise-based HTTP client for the browser and node.js.
- **Custom Hooks**: Encapsulating reusable logic.
- **JSON-Server**: Mock REST API database.

## ✨ Features

- **Refactored API Calls**: Using Axios to handle CRUD operations automatically, simplifying JSON parsing and error handling.
- **`useAxiosFetch` Hook**: A dedicated custom hook to fetch data, handle loading states, and catch errors cleanly across the application.
- **`useWindowSize` Hook**: The responsive device icon logic is now powered by a custom hook that actively listens to window resize events, making the header component much cleaner.
- **Improved Error Handling**: Better visual feedback for the user if the server is down or a request fails.

## 📝 What I Learned

- How to build and implement Custom Hooks to keep React components DRY (Don't Repeat Yourself).
- The advantages of Axios over the native Fetch API (e.g., automatic JSON transformation, better error handling).
- Abstracting side effects and state management out of UI components to improve code readability and maintenance.

## ⚙️ How to Run Locally

1. Clone the repository and switch to the correct branch for version 3.
2. Open your terminal in the project directory and install dependencies: `npm install`
3. Open a separate terminal window to start the mock database: `npx json-server -p 3500 -w data/db.json`
4. In the first terminal window, start the React app: `npm start`