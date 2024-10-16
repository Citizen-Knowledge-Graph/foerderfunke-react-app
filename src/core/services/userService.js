import readJson from '../utilities/readJson';
import {UserModel} from "../models/UserModel";

export const loadUserData = async () => {
    // initialise kinderzuschlag profile
    const profilePath = 'kinderzuschlag-user-profile';
    const userProfilePath = `assets/data/user-profile-examples/${profilePath}.json`;

    // fetch the JSON data from the specified path
    const userProfileData = await readJson(userProfilePath);

    // Store user data in session storage
    UserModel.storeUserData(userProfileData);
};



// Assuming UserStore's storeUserData function
export class UserStore {
    static storeUserData(userId, userData) {
        // Assuming this logic now stores data in session storage
        sessionStorage.setItem(userId, JSON.stringify(userData));
    }
}
