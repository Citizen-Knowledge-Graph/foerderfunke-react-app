import React, { useState } from "react";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTopSectionShared from "./components/LandingPageTopSectionShared";
import featureFlags from "@/featureFlags";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const LandingPageTopSection = ({ runway }) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const [loaded, setLoaded] = useState(false);
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/star_woman.png`;
    const imageSize = isDesktop ? 523 : 328;

    return (
        <LandingPageSectionWrapper>
            {isDesktop ? (
                <HBox justifyContent="space-between" alignItems="flex-start">
                    <VBox sx={{ width: "50%", alignItems: "center" }}>
                        <VBox sx={{ maxWidth: "600px", gap: 4 }}>
                            <LandingPageTopSectionShared />
                            {runway === "bielefunke" && featureFlags.bielefunke && (
                                <VBox
                                    sx={(theme) => ({
                                        padding: 4,
                                        backgroundColor: `${theme.palette.white.dark}40`,
                                        borderRadius: theme.shape.borderRadius,
                                    })}
                                >
                                    <Typography variant="h2">Willkommen beim Pilotprojekt Bielefeld!</Typography>
                                    <Typography variant="body1" sx={{ textAlign: 'left' }}>
                                        Gebt uns gerne Feedback: (dedicated email address?)
                                        <br /><br />
                                        <Link to="/eligibility-overview?tags=ff%3Abielefunke">hier</Link> die Leistungen die wir im Rahmen des Pilotprojekts bis jetzt eingepflegt haben.
                                    </Typography>
                                </VBox>
                            )}
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