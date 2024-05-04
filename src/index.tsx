import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import ChatPage from "./views/ChatPage/ChatPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import JuiceTipPage from "./views/JuiceTipPage/JuiceTipPage";
import JuiceMartPage from "./views/JuiceMartPage/JuiceMartPage";
import JuiceTrackPage from "./views/JuiceTrack/JuiceTrackPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddProductPage from "./views/AddProductPage/AddProductPage";
import TopUpPage from "./views/TopUpPage/TopUpPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/chat/:customerId",
    element: <ChatPage />,
  },
  {
    path: "/juice-tip",
    element: <JuiceTipPage />,
  },
  {
    path: "/juice-mart",
    element: <JuiceMartPage />,
  },
  {
    path: "/juice-track",
    element: <JuiceTrackPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/add-product",
    element: <AddProductPage />,
  },
  {
    path: "/top-up",
    element: <TopUpPage />,
  },
  {
    path: "/detail-product/:productId",
    element: <DetailProductPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);
