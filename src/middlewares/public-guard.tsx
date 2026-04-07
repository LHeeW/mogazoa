import { Navigate, Outlet } from "react-router-dom";
import { authKeys } from "../utils/auth-key";

export default function PublicGaurd() {
  const accessToken = localStorage.getItem(authKeys.ACCESS_TOKEN);

  if (accessToken) return <Navigate to={"/"} replace={true} />;

  return <Outlet />;
}
