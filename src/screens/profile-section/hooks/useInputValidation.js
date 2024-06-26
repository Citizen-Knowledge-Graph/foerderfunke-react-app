const useInputValidation = (expectedType) => {
    return (value) => {
        return new Promise((resolve, reject) => {
            switch (expectedType) {
                case 'string':
                    if (typeof value !== 'string') {
                        reject('Invalid value type. Expected string.');
                    }
                    break;
                case 'integer':
                    if (isNaN(value)) {
                        reject('Invalid value type. Expected number.');
                    }
                    break;
                case 'boolean':
                    if (value !== 'true' && value !== 'false') {
                        reject('Invalid value type. Expected boolean.');
                    }
                    break;
                case 'class':
                    resolve();
                    break;
                default:
                    reject('Unknown data type.');
            }
            resolve();
        });
    };
};

export default useInputValidation;
