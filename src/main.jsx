import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import "./index.css";
import fetchUsersReducer from "./fetchUsersSlice.js";

const store = configureStore({
  reducer: {
    users: userReducer,
    userList: fetchUsersReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
