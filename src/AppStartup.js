import { useEffect, useState } from 'react';
import { loadUserData } from './core/services/userService';

const AppStartup = () => {
    //const userId = useUserStore((state) => state.userId);
    const [sessionStoreInitialised, setSessionStoreInitialised] = useState(false);

    // initialise session store
    useEffect(() => {
        const initialiseSessionStore = async () => {
            if (!sessionStoreInitialised) {
                await loadUserData();
                console.log('Session store initialised');
                setSessionStoreInitialised(true);
            }
        };

        initialiseSessionStore();
    }, [sessionStoreInitialised]);

    return null;
};

export default AppStartup;
