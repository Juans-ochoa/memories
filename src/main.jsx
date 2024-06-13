import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PostContextProvider } from "./context/PostsContex.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>
);
