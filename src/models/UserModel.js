export class UserModel {
    static initialiseNewUser(userId) {
        // check if the user already exists
        if (sessionStorage.getItem(userId)) {
            throw new Error('User already exists');
        }

        // check that user id is not undefined
        if (!userId) {
            throw new Error('User id is undefined');
        }

        // create a new user
        let userString = `{"@id":"${userId}","@type":"ff:Citizen"}`;
        sessionStorage.setItem(userId, userString);

        // add the user to the list of user ids
        const userIds = JSON.parse(sessionStorage.getItem('userIds') || '[]');
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            sessionStorage.setItem('userIds', JSON.stringify(userIds));
        }
    }

    // set a new field in the user data
    static setField(userId, value, datafield, entityData) {
        let userProfile = UserModel.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        const updated = updateOrAddField(
            userProfile,
            value,
            datafield,
            entityData
        );

        if (!updated) {
            throw new Error(
                `Could not set datafield ${entityData.datafield} in user profile`
            );
        }

        UserModel.storeUserData(userProfile);
    }

    static retrieveUserField(userId, datafield, entityData) {
        let userProfile = UserModel.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        return retrieveField(userProfile, datafield, entityData);
    }

    // store user data to session storage
    static storeUserData(userData) {
        const userId = userData['@id'];
        sessionStorage.setItem(userId, JSON.stringify(userData));
        const userIds = JSON.parse(sessionStorage.getItem('userIds') || '[]');
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            sessionStorage.setItem('userIds', JSON.stringify(userIds));
        }
    }

    // retrieve the user data from session storage
    static retrieveUserData(entityId) {
        let userString = sessionStorage.getItem(entityId);
        if (!userString) {
            userString = `{"@id":"${entityId}", "@type":"ff:Citizen"}`;
            sessionStorage.setItem(entityId, userString);
        }

        return JSON.parse(userString);
    }

    // return all user ids
    static retrieveAllUserIds() {
        return JSON.parse(sessionStorage.getItem('userIds') || '[]');
    }
}

function updateOrAddField(data, value, datafield, entityData) {
    if (data['@id'] === entityData.id && data['@type'] === entityData.type) {
        data[datafield] = value;
        return true;
    }

    if (data['@id'] === entityData.parentId && data['@type'] === entityData.parentType) {
        if (Array.isArray(data[entityData.parentDatafield])) {
            for (let item of data[entityData.parentDatafield]) {
                if (updateOrAddField(item, value, datafield, entityData)) {
                    return true;
                }
            }
        } else {
            data[entityData.parentDatafield] = [];
        }
        const newChild = {
            '@id': entityData.id,
            '@type': entityData.type,
            [datafield]: value,
        };
        data[entityData.parentDatafield].push(newChild);
        return true;
    }

    for (const key in data) {
        if (Array.isArray(data[key])) {
            for (let item of data[key]) {
                if (updateOrAddField(item, value, datafield, entityData)) {
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
