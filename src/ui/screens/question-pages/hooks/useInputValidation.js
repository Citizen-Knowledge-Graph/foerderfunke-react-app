import { useCallback } from 'react';
import dayjs from 'dayjs';

const useInputValidation = (expectedType) => {
  return useCallback((value) => {
    return new Promise((resolve, reject) => {
      switch (expectedType) {
        case 'string':
        case 'selection':
          if (typeof value !== 'string') reject('Expected string.');
          break;
        case 'selection-multiple':
          if (!Array.isArray(value) || value.length === 0) {
            reject('Expected a non-empty array.');
          } else if (!value.every(item => typeof item === 'string')) {
            reject('Expected all array items to be strings.');
          }
          break;
        case 'integer':
          if (isNaN(value)) reject('Expected number.');
          break;
        case 'boolean':
          if (value !== true && value !== false) reject('Expected boolean.');
          break;
        case 'date':
          if (!dayjs(value).isValid()) reject('Expected valid date.');
          break;
        case 'class':
          resolve();
          break;
        default:
          reject('Unknown data type.');
      }
      resolve();
    });
  }, [expectedType]);
};

export default useInputValidation;