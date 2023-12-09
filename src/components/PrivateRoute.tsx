import useUserStore, { useAuth } from "@/store/userStore";
import { useEffect, useState } from "react";
import { auth } from "@/configs/firebase";
import { Outlet, Navigate } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoute = () => {
  const { setIsAuth, isAuth } = useUserStore();
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState(true);

  const user = useAuth((v) => v.user);
  const setUser = useAuth((v) => v.setUser);

  useEffect(() => {
    if (!user) setUser();
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        if (user) setIsAuth(true);
        else setIsAuth(false);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) return <Loading />;

  return <>{!isAuth ? <Navigate to="/masuk" /> : <Outlet />}</>;
};

export default PrivateRoute;
