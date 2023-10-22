import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

let taskId = Math.trunc(Math.random());

const taskIdFunc = () => {
    return taskId++;
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App taskIdFunc={taskIdFunc} />
    </React.StrictMode>
);
