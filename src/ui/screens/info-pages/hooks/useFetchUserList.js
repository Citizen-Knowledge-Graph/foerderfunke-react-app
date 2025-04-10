import { useEffect, useState } from "react";
import userManager from "@/core/managers/userManager";

export const useFetchUserList = (userDeleted) => {
  const [userList, setUserList] = useState([]);

  useEffect (() => {
    const userIds = userManager.retrieveUserIds();
    const newUserList = userIds.map((userId) => {
      const userData = userManager.retrieveUserData(userId);
      return {
        id: userData['@id'],
        type: userData['@type'],
      };
    });
    setUserList(newUserList)
  }, [userDeleted]);

  return userList;
}
export default useFetchUserList;