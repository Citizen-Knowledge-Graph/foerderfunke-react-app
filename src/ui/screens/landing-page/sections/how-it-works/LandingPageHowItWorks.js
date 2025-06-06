import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import useTranslation from "@/ui/language/useTranslation";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageInfoCard from "./components/LandingPageInfoCard";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";

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
                            <HBox justifyContent="flex-end">
                                <RegularButton variant="blackContained" link={'/user-routing'} />
                            </HBox>
                        </VBox>
                    </HBox>
                </VBox>
            ) : (
                <VBox alignItems="center" sx={{ gap: 6, width: "100%" }}>
                    <Typography variant="h1">{t("home.howItWorks.header")}</Typography>
                        <VBox sx={{ alignItems: 'center', maxWidth: "400px" }}>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                style={{
                                    width: "100%",
                                    "--swiper-pagination-color": "#263046",
                                    "--swiper-pagination-bullet-inactive-color": "#d1d5db",
                                    "--swiper-pagination-bullet-inactive-opacity": "0.4",
                                    "--swiper-pagination-bullet-size": "10px",
                                    "--swiper-pagination-bullet-horizontal-gap": "8px",
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
                </VBox>
            )}
        </LandingPageSectionWrapper>
    );
};

export default LandingPageHowItWorks;
