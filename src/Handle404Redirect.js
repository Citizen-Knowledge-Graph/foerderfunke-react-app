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
        const decodedRoute = decodeURIComponent(pathname);
        const decodedHash = decodeURIComponent(hash || '');
        console.log("-->", decodedRoute, decodedHash);
        // navigate(decodedRoute + decodedHash, { replace: true });
    }, [location, navigate]);

    return null;
};

export default Handle404Redirect;
