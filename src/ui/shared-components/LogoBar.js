import React from "react";

const LogoBar = ({ size = 'large', secondary = false }) => {
    //const logoUrl =`${process.env.PUBLIC_URL}/assets/images/logos/FF_logo_round.svg`;
    const logoUrlSecondary = `${process.env.PUBLIC_URL}/assets/images/logos/FörderFunke_Logo_schwarz.svg`;

    return (
        <img src={logoUrlSecondary} alt="logo" style={{ width: '200px' }} />
    );
}

export default LogoBar;
