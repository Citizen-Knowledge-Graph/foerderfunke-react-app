const userService = {
    updateOrAddField(data, value, dataField, context) {
        try {
            if (!data["@context"]) {
                data["@context"] = {};
            }

            const [prefix] = dataField.split(":");
            if (prefix && !(prefix in data["@context"])) {
                if (context[prefix]) {
                    data["@context"][prefix] = context[prefix];
                } else {
                    throw new Error(`Prefix "${prefix}" not found in provided context`);
                }
            }

            if (!Array.isArray(data[dataField])) {
                data[dataField] = data[dataField] == null
                    ? []
                    : [data[dataField]];
            }
            data[dataField].push(value);

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
