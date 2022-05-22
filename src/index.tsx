import React from "react";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { config } from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
export const overmind = createOvermind(config, {
  devtools: false,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider value={overmind}>
      <App />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();