import React, { useState } from "react";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";
import LandingPageTopSectionShared from "../components/LandingPageTopSectionShared";
import LandingPageButton from "../components/LandingPageButton";

const LandingPageTopSectionDesktop = () => {
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/star_woman.svg`;
    const [loaded, setLoaded] = useState(false);

    return (
        <HBox justifyContent="space-between" alignItems="center">
            <VBox sx={{ width: "50%", boxSizing: "border-box", alignItems: "center" }}>
                <VBox sx={{ maxWidth: "600px", gap: theme.spacing(8) }}>
                    <LandingPageTopSectionShared />
                    <LandingPageButton />
                </VBox>
            </VBox>
            <VBox sx={{ width: "50%", boxSizing: "border-box", alignItems: "center" }}>
                <img src={starWoman} alt="logo" style={{ 
                    width: "523px", 
                    height: "523px",
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                    }} 
                    onLoad={() => setLoaded(true)}

                    />
            </VBox>
        </HBox>
    );
};

export default LandingPageTopSectionDesktop;