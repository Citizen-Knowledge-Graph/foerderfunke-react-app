export const UserStatus = {
  USER_EXISTS: "USER_EXISTS",
  USER_DOES_NOT_EXIST: "USER_DOES_NOT_EXIST",
};

export const useUserExistsStatus = (userManager) => {
  if (!userManager || typeof userManager.retrieveUserIds !== "function") {
    return UserStatus.USER_DOES_NOT_EXIST;
  }

  return userManager.retrieveUserIds()?.length > 0
    ? UserStatus.USER_EXISTS
    : UserStatus.USER_DOES_NOT_EXIST;
};
