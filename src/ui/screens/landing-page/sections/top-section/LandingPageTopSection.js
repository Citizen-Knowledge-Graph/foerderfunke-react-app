import React, { useState } from "react";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTopSectionShared from "./components/LandingPageTopSectionShared";

const LandingPageTopSection = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const [loaded, setLoaded] = useState(false);
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/star_woman.png`;
    const imageSize = isDesktop ? 523 : 328;

    return (
        <LandingPageSectionWrapper>
            {isDesktop ? (
                <HBox justifyContent="space-between" alignItems="center">
                    <VBox sx={{ width: "50%", alignItems: "center" }}>
                        <VBox sx={{ maxWidth: "600px", gap: 8 }}>
                            <LandingPageTopSectionShared />
                            <RegularButton variant={'yellowContained'} link='/user-routing' />
                        </VBox>
                    </VBox>
                    <VBox sx={{ width: "50%", alignItems: "center", position: "relative" }}>
                        {!loaded && (
                            <div
                                style={{
                                    width: `${imageSize}px`,
                                    height: `${imageSize}px`
                                }}
                            />
                        )}
                        <img
                            src={starWoman}
                            alt="logo"
                            style={{
                                width: `${imageSize}px`,
                                height: `${imageSize}px`,
                                position: loaded ? "static" : "absolute",
                                opacity: loaded ? 1 : 0,
                                transition: "opacity 0.8s ease-in-out",
                                borderRadius: "12px",
                            }}
                            onLoad={() => setLoaded(true)}
                        />
                    </VBox>
                </HBox>
            ) : (
                <VBox sx={{ gap: "46px", alignItems: "center" }}>
                    <VBox sx={{ alignItems: "center", position: "relative" }}>
                        {!loaded && (
                            <div
                                style={{
                                    width: `${imageSize}px`,
                                    height: `${imageSize}px`,
                                }}
                            />
                        )}
                        <img
                            src={starWoman}
                            alt="logo"
                            style={{
                                width: `${imageSize}px`,
                                height: `${imageSize}px`,
                                position: loaded ? "static" : "absolute",
                                opacity: loaded ? 1 : 0,
                                transition: "opacity 0.8s ease-in-out",
                                borderRadius: "12px",
                            }}
                            onLoad={() => setLoaded(true)}
                        />
                    </VBox>

                    <VBox sx={{ gap: "16px" }}>
                        <LandingPageTopSectionShared />
                        <RegularButton variant={'yellowContained'} link='/user-routing' />
                    </VBox>
                </VBox>
            )}
        </LandingPageSectionWrapper>
    );
};

export default LandingPageTopSection;