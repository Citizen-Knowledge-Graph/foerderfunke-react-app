import { UserModel } from '../../../core/models/UserModel';

// UNUSED

const useCreateUserprofile = (username) => {
    return () => {
        return new Promise((resolve, reject) => {
            try {
                UserModel.initialiseNewUser(username);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
};

export default useCreateUserprofile;
