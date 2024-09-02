import { useAppSelector } from "@/redux/hooks/hooks";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { accessToken } = useAppSelector((state) => state?.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/sign-in");
      return;
    }
  }, [accessToken]);

  return <div>{children}</div>;
}

export default ProtectedRoute;
