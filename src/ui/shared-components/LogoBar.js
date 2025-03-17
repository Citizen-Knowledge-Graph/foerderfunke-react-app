import React from "react";

const LogoBar = ({ isApp }) => {
    const logoPath =  !isApp ? `${process.env.PUBLIC_URL}/assets/images/logos/FörderFunke_Logo_schwarz.svg` : `${process.env.PUBLIC_URL}/assets/images/logos/FörderFunke_Logo_weiss.svg`;

    return (
        <img src={logoPath} alt="logo" style={{ width: '200px' }} />
    );
}

export default LogoBar;
