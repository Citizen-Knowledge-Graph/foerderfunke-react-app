import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Handle404Redirect = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pathname = params.get("pathname");
        if (!pathname) return;
        const hash = params.get("hash");
        const decodedPathname = decodeURIComponent(pathname);
        if (!(decodedPathname === "/default" && hash)) return; // support other redirects also TODO
        const decodedHash = decodeURIComponent(hash || '');
        console.log("navigating to: ", decodedPathname, decodedHash);
        navigate(decodedPathname + decodedHash, { replace: true });
    }, [location, navigate]);

    return null;
};

export default Handle404Redirect;
