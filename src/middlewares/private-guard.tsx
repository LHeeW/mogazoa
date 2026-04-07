import { Navigate, Outlet } from "react-router-dom";
import { authKeys } from "../utils/auth-key";

export default function PrivateGuard() {
  const accessToken = localStorage.getItem(authKeys.ACCESS_TOKEN);

  if (!accessToken) return <Navigate to={"/login"} replace={true} />;

  return <Outlet />;
}
