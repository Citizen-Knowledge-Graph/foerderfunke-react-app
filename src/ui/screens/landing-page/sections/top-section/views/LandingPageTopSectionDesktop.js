import React from "react";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";
import LandingPageTopSectionShared from "../components/LandingPageTopSectionShared";
import LandingPageButton from "../components/LandingPageButton";

const LandingPageTopSectionDesktop = () => {
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/star_woman.svg`;

    return (
        <HBox justifyContent="space-between" alignItems="center">
            <VBox sx={{ width: "50%", boxSizing: "border-box", alignItems: "flex-end" }}>
                <VBox sx={{ maxWidth: "600px", gap: theme.spacing(8) }}>
                    <LandingPageTopSectionShared />
                    <LandingPageButton />
                </VBox>
            </VBox>
            <VBox sx={{ width: "50%", boxSizing: "border-box", alignItems: "flex-end" }}>
                <img src={starWoman} alt="logo" style={{ width: "523px" }} />
            </VBox>
        </HBox>
    );
};

export default LandingPageTopSectionDesktop;