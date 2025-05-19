import userManager from "@/core/managers/userManager";

export const UserStatus = {
  EXISTS:           "USER_EXISTS",
  DOES_NOT_EXIST:  "USER_DOES_NOT_EXIST",
};

const ALLOWED_ROOT_KEYS = ["@id", "@type"];

function hasExtraRootKeys(obj) {
  return Object
    .keys(obj)
    .some(key => !ALLOWED_ROOT_KEYS.includes(key));
}

export function useUserExistsStatus(id = "ff:quick-check-user") {
  const profile = userManager.retrieveUserData(id);

  if (!profile) {
    return false;
  }

  return hasExtraRootKeys(profile);
}