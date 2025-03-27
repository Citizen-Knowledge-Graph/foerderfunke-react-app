import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import useTranslation from "../../../../language/useTranslation";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageInfoCard from "./components/LandingPageInfoCard";
import { VBox, HBox } from "../../../../shared-components/LayoutBoxes";
import { useStore } from "../../../../shared-components/ViewportUpdater";

const LandingPageHowItWorks = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    

    const desktopImages = [
        `${process.env.PUBLIC_URL}/assets/images/landing-page/Macbook_Anspruchscheck.svg`,
        `${process.env.PUBLIC_URL}/assets/images/landing-page/Macbook_Leistungen.svg`,
        `${process.env.PUBLIC_URL}/assets/images/landing-page/Macbook_Bafög.svg`
    ];

    const mobileImages = [
        `${process.env.PUBLIC_URL}/assets/images/landing-page/Iphone_Mockup_Themen.svg`,
        `${process.env.PUBLIC_URL}/assets/images/landing-page/Iphone_Mockup_Leistungen.svg`,
        `${process.env.PUBLIC_URL}/assets/images/landing-page/Iphone_Mockup_Details.svg`
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        {
            title: t("home.howItWorks.part1Header"),
            text: t("home.howItWorks.part1Text"),
        },
        {
            title: t("home.howItWorks.part2Header"),
            text: t("home.howItWorks.part2Text"),
        },
        {
            title: t("home.howItWorks.part3Header"),
            text: t("home.howItWorks.part3Text"),
        },
    ];

    return (
        <LandingPageSectionWrapper>
            {isDesktop ? (
                <VBox sx={{ width: "100%", alignItems: "center" }}>
                    <HBox
                        gap={10}
                        sx={{
                            maxWidth: "1118px",
                            justifyContent: "center",
                            alignItems: "flex-end",
                        }}
                    >
                        <VBox gap={9}>
                            <Typography variant="h1">{t("home.howItWorks.header")}</Typography>
                            <VBox gap={3}>
                                {cards.map((card, i) => (
                                    <LandingPageInfoCard
                                        key={i}
                                        title={card.title}
                                        text={card.text}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        hovered={hoveredIndex === i}
                                        isDesktop={true}
                                    />
                                ))}
                            </VBox>
                        </VBox>
                        <VBox sx={{ gap: 6, alignItems: "flex-end", justifyContent: "flex-end" }}>
                            <img
                                src={desktopImages[hoveredIndex ?? 0]}
                                alt="how it works"
                                style={{ width: "506px" }}
                            />
                            <HBox sx={{ gap: 2 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'blue.dark',
                                        borderColor: 'blue.dark',
                                        '&:hover': {
                                            backgroundColor: 'yellow.main',
                                            color: 'black.main',
                                            borderColor: 'yellow.main',
                                        },
                                    }}
                                    component={Link}
                                    to="/user-routing"
                                >
                                    {t("home.global.actionButton")}
                                </Button>
                            </HBox>
                        </VBox>
                    </HBox>
                </VBox>
            ) : (
                <VBox alignItems="flex-start" sx={{ gap: 6, width: "100%", maxWidth: "400px" }}>
                    <Typography variant="h1">{t("home.howItWorks.header")}</Typography>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        style={{
                            width: "100%",
                            "--swiper-pagination-color": 'blue.dark',
                            "--swiper-pagination-bullet-inactive-color": 'blue.main',
                            "--swiper-pagination-bullet-inactive-opacity": "0.5",
                        }}
                    >
                        {cards.map((card, i) => (
                            <SwiperSlide key={i}>
                                <LandingPageInfoCard
                                    title={card.title}
                                    text={card.text}
                                    image={mobileImages[i]}
                                    isDesktop={false}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </VBox>
            )}
        </LandingPageSectionWrapper>
    );
};

export default LandingPageHowItWorks;
