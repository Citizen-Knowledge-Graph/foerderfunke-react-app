import dayjs from "dayjs";

const useInputValidation = (expectedType) => {
    return (value) => {
        return new Promise((resolve, reject) => {
            switch (expectedType) {
                case 'string':
                    if (typeof value !== 'string') {
                        reject('Invalid value type. Expected string.');
                    }
                    break;
                case 'selection':
                    if (!value || typeof value !== 'string') {
                        reject('Invalid value type. Expected string.');
                    }
                    break;
                case 'selection-multiple':
                    if (!Array.isArray(value) || value.length === 0) {
                        reject('Invalid value type. Expected an array.');
                    } else if (!value.every(item => typeof item === 'string')) {
                        reject('Invalid array contents. Expected all elements to be strings.');
                    }
                    break;
                case 'integer':
                    if (isNaN(value)) {
                        reject('Invalid value type. Expected number.');
                    }
                    break;
                case 'boolean':
                    if (value !== true && value !== false) {
                        reject('Invalid value type. Expected boolean.');
                    }
                    break;
                case 'date':
                    if (!dayjs(value).isValid()) {
                        reject('Invalid value type. Expected a valid date.');
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
