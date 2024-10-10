import { useEffect } from "react";
import { useAppSelector } from "../../store/hook";
import { useNavigate } from "react-router-dom";
const WithGuard = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default WithGuard;
