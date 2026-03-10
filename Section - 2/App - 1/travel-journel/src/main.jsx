import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

function App_2() {
    let firstName = "John";
    let lastName = "Shmoe"
    
    return (
        <>
            <h1>Hello, {firstName + " " + lastName} </h1>
            <h1>It is currently { new Date().getHours() % 12} : { new Date().getMinutes()}</h1>
        </>
        
    )
}

root.render(
  <>
    <App />
    <App_2 />
  </>
);
