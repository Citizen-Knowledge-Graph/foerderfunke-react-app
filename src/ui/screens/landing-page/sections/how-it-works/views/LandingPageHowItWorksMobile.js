import React from "react";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic styles
import "swiper/css/pagination"; // Add pagination styles
import "swiper/css/navigation"; // Add navigation styles
import { Pagination, Navigation } from "swiper/modules"; // Import Swiper modules
import LandingPageInfoCard from "../components/LandingPageInfoCard";
import useTranslation from "../../../../../language/useTranslation";
import { VBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";

const LandingPageHowItWorksMobile = ({ quick_check, benefits_overview, benefit_page }) => {
    const { t } = useTranslation();

    return (
        <VBox alignItems={"flex-start"} sx={{ gap: theme.spacing(6), width: "100%", maxWidth: "400px" }}>
            <Typography variant="h1">{t('home.howItWorks.header')}</Typography>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                style={{ width: "100%" }}
            >
                <SwiperSlide>
                    <LandingPageInfoCard
                        title={t("home.howItWorks.part1Header")}
                        text={t("home.howItWorks.part1Text")}
                        image={quick_check}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LandingPageInfoCard
                        title={t("home.howItWorks.part2Header")}
                        text={t("home.howItWorks.part2Text")}
                        image={benefits_overview}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LandingPageInfoCard
                        title={t("home.howItWorks.part3Header")}
                        text={t("home.howItWorks.part3Text")}
                        image={benefit_page}
                    />
                </SwiperSlide>
            </Swiper>
        </VBox>
    );
};

export default LandingPageHowItWorksMobile;