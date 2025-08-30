import React, { useState } from "react";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import LandingPageSectionWrapper from "../../../components/LandingPageSectionWrapper";
import LandingPageTopSectionSharedVariant from "../components/LandingPageTopSectionSharedVariant";

const LandingPageTopSectionBielefunke = ({ runway }) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const [loaded, setLoaded] = useState(false);
    const bielefeldImage = `${process.env.PUBLIC_URL}/assets/images/landing-page/bielefeld_image.svg`;
    const imageSize = isDesktop ? 523 : 328;

    return (
        <LandingPageSectionWrapper>
            {isDesktop ? (
                <HBox justifyContent="space-between" alignItems="flex-start">
                    <VBox sx={{ width: "50%", alignItems: "center" }}>
                        <VBox sx={{ maxWidth: "600px", gap: 4 }}>
                            <LandingPageTopSectionSharedVariant runway={runway} />
                            <HBox>
                                <RegularButton text={'home.hero.bielefeld.pilotButton'} variant={'whiteOutlinedBlue'} link='/eligibility-overview?tags=ff%3Abielefunke' />
                                <RegularButton text={'home.hero.bielefeld.regularButton'} variant={'yellowContained'} link='/user-routing' />
                            </HBox>
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
                            src={bielefeldImage}
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
                            src={bielefeldImage}
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
                        <LandingPageTopSectionSharedVariant runway={runway} />
                        <VBox sx={{ gap: 2, width: '100%' }}>
                            <RegularButton text={'home.hero.bielefeld.pilotButton'} variant={'whiteOutlinedBlue'} link='/eligibility-overview?tags=ff%3Abielefunke' />
                            <RegularButton text={'home.hero.bielefeld.regularButton'} variant={'yellowContained'} link='/user-routing' />
                        </VBox>
                    </VBox>
                </VBox>
            )}
        </LandingPageSectionWrapper>
    );
};

export default LandingPageTopSectionBielefunke;