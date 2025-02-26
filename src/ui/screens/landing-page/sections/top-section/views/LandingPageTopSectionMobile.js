import React from "react";
import { VBox } from "../../../../../shared-components/LayoutBoxes";
import LandingPageTopSectionShared from "../components/LandingPageTopSectionShared";
import LandingPageButton from "../components/LandingPageButton";

const LandingPageTopSectionMobile = () => {
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/star_woman.svg`;

    return (
        <VBox sx={{ gap: "46px", alignItems: "center" }}>
            <img src={starWoman} alt="logo" style={{ width: "328px" }} />
            <VBox sx={{ gap: "16px" }}>
                <LandingPageTopSectionShared isDesktop={false}/>
                <LandingPageButton />
            </VBox>
        </VBox>
    );
};

export default LandingPageTopSectionMobile;