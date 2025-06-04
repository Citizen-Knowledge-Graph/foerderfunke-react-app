import { useCallback } from 'react';
import dayjs from 'dayjs';

const useInputValidation = (expectedType) => {
  return useCallback((value) => {
    return new Promise((resolve, reject) => {
      switch (expectedType) {
        case 'string':
        case 'ff:selection':
          if (typeof value !== 'string') reject('Expected string.');
          break;
        case 'ff:selection_multiple':
          if (!Array.isArray(value) || value.length === 0) {
            reject('Expected a non-empty array.');
          } else if (!value.every(item => typeof item === 'string')) {
            reject('Expected all array items to be strings.');
          }
          break;
        case 'xsd:integer':
          if (isNaN(value)) reject('Expected number.');
          break;
        case 'xsd:boolean':
          if (value !== true && value !== false) reject('Expected boolean.');
          break;
        case 'xsd:date':
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