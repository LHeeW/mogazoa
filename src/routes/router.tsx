import { createBrowserRouter } from "react-router-dom";
import PublicGaurd from "../middlewares/public-guard";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import PrivateGuard from "../middlewares/private-guard";
import HomePage from "../pages/home";
import MainLayout from "../layouts/main-layout";

export const router = createBrowserRouter([
  // 헤더가 없는 경로
  {
    element: <PublicGaurd />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  // 헤더가 있는 경로
  {
    element: <PrivateGuard />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  // not found
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);
