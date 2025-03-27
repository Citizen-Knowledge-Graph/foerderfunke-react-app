import React, { useState } from "react";
import { useStore } from "../../../../shared-components/ViewportUpdater";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTopSectionShared from "./components/LandingPageTopSectionShared";
import LandingPageButton from "./components/LandingPageButton";
import { HBox, VBox } from "../../../../shared-components/LayoutBoxes";

const LandingPageTopSection = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const [loaded, setLoaded] = useState(false);
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/star_woman.svg`;

    return (
        <LandingPageSectionWrapper>
            {isDesktop ? (
                <HBox justifyContent="space-between" alignItems="center">
                    <VBox sx={{ width: "50%", alignItems: "center" }}>
                        <VBox sx={{ maxWidth: "600px", gap: 8 }}>
                            <LandingPageTopSectionShared />
                            <LandingPageButton />
                        </VBox>
                    </VBox>
                    <VBox sx={{ width: "50%", alignItems: "center" }}>
                        <img
                            src={starWoman}
                            alt="logo"
                            style={{
                                width: "523px",
                                height: "523px",
                                opacity: loaded ? 1 : 0,
                                transition: "opacity 0.8s ease-in-out",
                            }}
                            onLoad={() => setLoaded(true)}
                        />
                    </VBox>
                </HBox>
            ) : (
                <VBox sx={{ gap: "46px", alignItems: "center" }}>
                    <img src={starWoman} alt="logo" style={{ width: "328px" }} />
                    <VBox sx={{ gap: "16px" }}>
                        <LandingPageTopSectionShared />
                        <LandingPageButton />
                    </VBox>
                </VBox>
            )}
        </LandingPageSectionWrapper>
    );
};

export default LandingPageTopSection;