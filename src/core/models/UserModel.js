export class UserModel {
    static initialiseNewUser(userId) {
        // check if the user already exists
        if (localStorage.getItem(userId)) {
            throw new Error('User already exists');
        }

        // check that user id is not undefined
        if (!userId) {
            throw new Error('User id is undefined');
        }

        // create a new user
        let userString = `{"@id":"${userId}","@type":"ff:Citizen"}`;
        localStorage.setItem(userId, userString);

        // add the user to the list of user ids
        const userIds = JSON.parse(localStorage.getItem('userIds') || '[]');
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            localStorage.setItem('userIds', JSON.stringify(userIds));
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

    static removeObjectFromField(userId, objectId, datafield, entityData) {
        let userProfile = UserModel.retrieveUserData(userId);

        if (!userProfile) {
            throw new Error(`User profile not found for userId: ${userId}`);
        }

        const removed = removeObjectFromField(userProfile, objectId, datafield, entityData);

        if (!removed) {
            throw new Error(
                `Could not remove datafield ${entityData.datafield} in user profile`
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

    // store user data to local storage
    static storeUserData(userData) {
        const userId = userData['@id'];
        localStorage.setItem(userId, JSON.stringify(userData));
        const userIds = JSON.parse(localStorage.getItem('userIds') || '[]');
        if (!userIds.includes(userId)) {
            userIds.push(userId);
            localStorage.setItem('userIds', JSON.stringify(userIds));
        }
    }

    // retrieve the user data from local storage
    static retrieveUserData(entityId) {
        let userString = localStorage.getItem(entityId);
        if (!userString) {
            userString = `{"@id":"${entityId}", "@type":"ff:Citizen"}`;
            localStorage.setItem(entityId, userString);
        }

        return JSON.parse(userString);
    }

    // return all user ids
    static retrieveAllUserIds() {
        return JSON.parse(localStorage.getItem('userIds') || '[]');
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
        if (data.hasOwnProperty(datafield)) {
            return data[datafield];
        }
    }

    for (const key in data) {
        if (Array.isArray(data[key])) {
            for (let item of data[key]) {
                const result = retrieveField(item, datafield, entityData);
                if (result !== null && result !== undefined) {
                    return result;
                }
            }
        }
    }

    return null;
}

function removeObjectFromField(data, objectId, datafield, entityData) {
    console.log('data 1', objectId)
    console.log('data 2', datafield)
    console.log('data 3', entityData)

    if (data['@id'] === entityData.id && data['@type'] === entityData.type) {
        if (Array.isArray(data[datafield])) {
            data[datafield] = data[datafield].filter(child => child['@id'] !== objectId);
            return true;
        }
        return false;
    }

    if (data['@id'] === entityData.parentId && data['@type'] === entityData.parentType) {
        if (Array.isArray(data[entityData.parentDatafield])) {
            for (let item of data[entityData.parentDatafield]) {
                if (removeObjectFromField(item, objectId, datafield, entityData)) {
                    return true;
                }
            }
        }
        return false;
    }

    for (const key in data) {
        if (Array.isArray(data[key])) {
            for (let item of data[key]) {
                if (removeObjectFromField(item, objectId, datafield, entityData)) {
                    return true;
                }
            }
        }
    }

    return false;
}
