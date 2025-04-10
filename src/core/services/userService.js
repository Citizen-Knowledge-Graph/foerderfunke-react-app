const userService = {
    updateOrAddField(data, value, dataField) {
        try {
            data[dataField] = value;
            return true;
        } catch (err) {
            console.error("Failed to update or add field:", err);
            return false;
        }
    },

    removeObjectFromFieldAux(data, objectId, datafield, entityData) {
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
                    if (userService.removeObjectFromFieldAux(item, objectId, datafield, entityData)) {
                        return true;
                    }
                }
            }
            return false;
        }

        for (const key in data) {
            if (Array.isArray(data[key])) {
                for (let item of data[key]) {
                    if (userService.removeObjectFromFieldAux(item, objectId, datafield, entityData)) {
                        return true;
                    }
                }
            }
        }

        return false;
    },

    retrieveField(data, dataField) {
        if (data.hasOwnProperty(dataField)) {
            return data[dataField];
        }

        return null;
    },
}

export default userService;
