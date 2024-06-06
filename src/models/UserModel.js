import { storage } from '../storage/mmkv';

export class UserModel {
    static initialiseNewUser(userId) {
        // check if the user already exists
        if (storage.getString(userId)) {
            throw new Error('User already exists');
        }

        // create a new user
        let userString = `{"@id":"${userId}","@type":"ff:Citizen"}`;
        storage.set(userId, userString);

        // add the user to the list of user ids
        const userIds = JSON.parse(storage.getString('userIds') || '[]');
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            storage.set('userIds', JSON.stringify(userIds));
        }
    }

    // set a new field in the user data
    static setField(userId, value, entityData, parentData) {
        let userProfile = UserStore.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        console.log('userProfile: ', userProfile);
        console.log('entityData: ', entityData);

        const updated = updateOrAddField(
            userProfile,
            entityData,
            parentData,
            value
        );

        if (!updated) {
            throw new Error(
                `Could not set datafiled ${entityData.datafield} in user profile`
            );
        }

        UserStore.storeUserData(userId, userProfile);
    }

    static retrieveUserField(userId, datafield, entityData) {
        let userProfile = UserStore.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        return retrieveField(userProfile, datafield, entityData);
    }

    // store user data to mmkv
    static storeUserData(userId, userData) {
        storage.set(userId, JSON.stringify(userData));
        const userIds = JSON.parse(storage.getString('userIds') || '[]');
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            storage.set('userIds', JSON.stringify(userIds));
        }
    }

    // retrieve the user data from mmkv
    static retrieveUserData(entityId) {
        let userString = storage.getString(entityId);
        if (!userString) {
            userString = `{"@id":"${entityId}", "@type":"ff:Citizen"}`;
            storage.set(entityId, userString);
        }

        return JSON.parse(userString);
    }

    // return all user ids
    static retrieveAllUserIds() {
        return JSON.parse(storage.getString('userIds') || '[]');
    }
}

function updateOrAddField(data, entityData, parentData, value) {
    if (data['@id'] === entityData.id && data['@type'] === entityData.type) {
        data[entityData.datafield] = value;
        return true;
    }

    if (data['@id'] === parentData.id && data['@type'] === parentData.type) {
        if (Array.isArray(data[parentData.datafield])) {
            for (let item of data[parentData.datafield]) {
                if (updateOrAddField(item, entityData, parentData, value)) {
                    return true;
                }
            }
        } else {
            data[parentData.datafield] = [];
        }
        const newChild = {
            '@id': entityData.id,
            '@type': entityData.type,
            [entityData.datafield]: value,
        };
        data[parentData.datafield].push(newChild);
        return true;
    }

    for (const key in data) {
        if (Array.isArray(data[key])) {
            for (let item of data[key]) {
                if (updateOrAddField(item, entityData, parentData, value)) {
                    return true;
                }
            }
        }
    }

    return false;
}

function retrieveField(data, datafield, entityData) {
    if (data['@id'] === entityData.id && data['@type'] === entityData.type) {
        if (data[datafield]) {
            return data[datafield];
        }
    }

    for (const key in data) {
        if (Array.isArray(data[key])) {
            for (let item of data[key]) {
                const result = retrieveField(item, datafield, entityData);
                if (result) {
                    return result;
                }
            }
        }
    }

    return null;
}
