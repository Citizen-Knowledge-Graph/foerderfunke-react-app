import userManager from "@/core/managers/userManager";

export const useFetchUserList = () => {
  const userIds = userManager.retrieveUserIds();
  const userList = userIds.map((userId) => {
    const userData = userManager.retrieveUserData(userId);
    return {
      id: userData['@id'],
      type: userData['@type'],
    };
  });
  return userList;
}
export default useFetchUserList;