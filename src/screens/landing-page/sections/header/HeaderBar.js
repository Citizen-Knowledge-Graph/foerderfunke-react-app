import React, {useState, useEffect} from "react";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";
import VStack from "../../../../components/VStack";

const HeaderBar = ({isApp, isDesktop}) => {
    const [isHidden, setIsHidden] = useState(false);
    const horizontalPadding = isDesktop ? '60px' : '16px';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <VStack sx={{
            backgroundColor: 'white',
            zIndex: 1000,
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            paddingTop: '16px',
            paddingBottom: '16px',
            position: 'sticky',
            top: 0,
            transition: 'opacity 0.5s ease',
            opacity: isHidden ? 0 : 1,
        }}>
            {isDesktop ? <HeaderBarDesktop isApp={isApp}/> : <HeaderBarMobile isApp={isApp}/>}
        </VStack>
    )
}

export default HeaderBar;
