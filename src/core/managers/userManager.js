import localStorageService from '../services/localStorageService';
import userService from '../services/userService';

const userManager = {
    initialiseNewUser(userId) {
        if (localStorageService.getItem(userId)) {
            throw new Error('User already exists');
        }

        if (!userId) {
            throw new Error('User id is undefined');
        }

        const userObject = { "@id": userId, "@type": "ff:Citizen" };
        localStorageService.setItem(userId, userObject);

        const userIds = localStorageService.getItem('userIds') || [];
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            localStorageService.setItem('userIds', userIds);
        }
    },

    setField(userId, value, dataField, entityData) {
        const userProfile = userManager.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        const updated = userService.updateOrAddField(userProfile, value, dataField, entityData);

        if (!updated) {
            throw new Error(
                `Could not set datafield ${entityData.datafield} in user profile`
            );
        }

        userManager.storeUserData(userProfile);
    },

    removeObjectFromField(userId, objectId, dataField, entityData) {
        const userProfile = userManager.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        const removed = userService.removeObjectFromFieldAux(userProfile, objectId, dataField, entityData);

        if (!removed) {
            throw new Error(
                `Could not remove data field ${entityData.datafield} in user profile`
            );
        }

        userManager.storeUserData(userProfile);
    },

    retrieveUserField(userId, dataField, entityData) {
        const userProfile = userManager.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        return userService.retrieveField(userProfile, dataField, entityData);
    },

    storeUserData(userData) {
        const userId = userData['@id'];
        localStorageService.setItem(userId, userData);

        const userIds = new Set(localStorageService.getItem('userIds') || []);
        userIds.add(userId);
        localStorageService.setItem('userIds', Array.from(userIds));
    },

    retrieveUserData(entityId) {
        const userProfile = localStorageService.getItem(entityId);
        if (!userProfile) {
            throw new Error(`No user found with ID: ${entityId}`);
        }
        return userProfile;
    }
};

export default userManager;
