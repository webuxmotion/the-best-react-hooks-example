import React from "react";
import ReactDOM from "react-dom";
import { DepositContextProvider } from './context/DepositContext';
import App from "./App.js";

ReactDOM.render(
    <DepositContextProvider>
        <App />
    </DepositContextProvider>,
    document.getElementById("root")
);