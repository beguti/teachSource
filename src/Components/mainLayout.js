import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";

const MainLayout = () => {
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

  //Kullanıcı giriş yapmamış ise
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default MainLayout;
