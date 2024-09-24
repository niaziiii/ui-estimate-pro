import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../redux/slices/authSlice";

const useAuth = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return {
    user,
  };
};

export default useAuth;
