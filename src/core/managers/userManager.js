import localStorageService from '../services/localStorageService';
import userService from '../services/userService';

const userManager = {
    initialiseNewUser(userId = "ff:quick-check-user", userType = "ff:Citizen") {
        const userObject = {
            "@context": {
                ff: "https://foerderfunke.org/default#",
                xsd: "http://www.w3.org/2001/XMLSchema#"
            },
            "@id": userId,
            "@type": [userType]
        };

        localStorageService.setItem(userId, userObject);

        const userIds = localStorageService.getItem("userIds") || [];
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            localStorageService.setItem("userIds", userIds);
        }
    },

    deleteUser(userId = "ff:quick-check-user") {
        const userProfile = userManager.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        localStorageService.removeItem(userId);

        const userIds = localStorageService.getItem('userIds') || [];
        const updatedUserIds = userIds.filter(id => id !== userId);
        localStorageService.setItem('userIds', updatedUserIds);
    },

    setField(userId, value, dataField) {
        const userProfile = userManager.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        const updated = userService.updateOrAddField(userProfile, value, dataField);

        if (!updated) {
            throw new Error(
                `Could not set datafield ${dataField} in user profile`
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

    retrieveUserField(userId, dataField) {
        const userProfile = userManager.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        return userService.retrieveField(userProfile, dataField);
    },

    storeUserData(userData) {
        const userId = userData['@id'];
        localStorageService.setItem(userId, userData);

        const userIds = new Set(localStorageService.getItem('userIds') || []);
        userIds.add(userId);
        localStorageService.setItem('userIds', Array.from(userIds));
    },

    retrieveUserData(entityId = "ff:quick-check-user") {
        return localStorageService.getItem(entityId);
    },

    retrieveUserIds() {
        return localStorageService.getItem('userIds') || [];
    }
};

export default userManager;