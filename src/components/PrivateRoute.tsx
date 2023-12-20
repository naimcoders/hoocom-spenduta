import { useAuth } from "@/store/userStore";
import { useEffect, useState } from "react";
import { auth } from "@/configs/firebase";
import { Outlet, Navigate } from "react-router-dom";
import Loading from "./Loading";
import { useGetUserById } from "@/hooks/use-admin";

const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState(true);
  const [id, setId] = useState("");

  const { data } = useGetUserById(id);
  const getUser = data?.data;
  const setUser = useAuth((v) => v.setUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async (user) => {
        if (!user) setIsAuth(false);
        else {
          setIsAuth(true);
          const result = await user?.getIdTokenResult();
          const userId = String(result?.claims?.user_id);
          setId(userId);
          setUser(getUser);
        }
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [id, getUser]);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <Loading />;

  return <>{!isAuth ? <Navigate to="/masuk" /> : <Outlet />}</>;
};

export default PrivateRoute;
