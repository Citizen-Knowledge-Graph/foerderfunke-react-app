import { useEffect, useState } from "react";

export const UserStatus = {
  USER_EXISTS: "USER_EXISTS",
  USER_DOES_NOT_EXIST: "USER_DOES_NOT_EXIST",
};

export const useUserExistsStatus = (userManager) => {
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const userIds = userManager.retrieveUserIds();
    if (userIds.length === 0) {
      setUserStatus(UserStatus.USER_DOES_NOT_EXIST);
    } else {
      setUserStatus(UserStatus.USER_EXISTS);
    }
  }, [userManager]);

  return userStatus;
};