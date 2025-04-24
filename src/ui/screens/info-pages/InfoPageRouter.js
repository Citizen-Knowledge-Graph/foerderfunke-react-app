import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "@/core/managers/userManager";
import { useUserExistsStatus, UserStatus } from "./hooks/useUserExistsStatus";

const InfoPageRouter = () => {
    const userStatus = useUserExistsStatus(userManager);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (userStatus === UserStatus.USER_EXISTS) {
        navigate("/returning-user");
      }
  
      if (userStatus === UserStatus.USER_DOES_NOT_EXIST) {
        navigate("/privacy-info");
      }
    }, [userStatus, navigate]);
  
    return null;
  };
  
export default InfoPageRouter;