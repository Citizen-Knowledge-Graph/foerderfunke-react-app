import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "@/core/managers/userManager";
import { useUserExistsStatus, UserStatus } from "./hooks/useUserExistsStatus";
import { useUserStore } from "@/ui/storage/zustand";

const InfoPageRouter = () => {
    const userStatus = useUserExistsStatus(userManager);
    const updateUserId = useUserStore((state) => state.updateUserId);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (userStatus === UserStatus.USER_EXISTS) {
        updateUserId("ff:quick-check-user");
        navigate("/returning-user");
      }
  
      if (userStatus === UserStatus.USER_DOES_NOT_EXIST) {
        navigate("/privacy-info");
      }
    }, [userStatus, navigate, updateUserId]);
  
    return null;
  };
  
export default InfoPageRouter;