import { UserStore } from '../../../models/user-model';

const useCreateUserprofile = (username) => {
    return () => {
        return new Promise((resolve, reject) => {
            try {
                UserStore.initialiseNewUser(username);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
};

export default useCreateUserprofile;
