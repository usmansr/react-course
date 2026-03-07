import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <main>
    <img src="react-logo.png" alt="React logo" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>was released in 2013</li>
      <li>was originally created by Jordan Walke</li>
      <li>has well over 100K stars on GitHub</li>
      <li>is maintained by Facebook</li>
      <li>powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    <button>Show more</button>
  </main>
);
  