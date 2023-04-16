import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";

const AuthLayout = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  //Kullanıcı giriş yapmış ise
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
export default AuthLayout;
