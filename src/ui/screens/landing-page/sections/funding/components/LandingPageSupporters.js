import LandingPageSupportCard from "./LandingPageSupportCard";
import useTranslation from "../../../../../language/useTranslation";

export const SupporterCardNGI = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSupportCard
            header={t('home.supportedBy.headerNGI')}
            text={t('home.supportedBy.textNGI')}
            logo1={`${process.env.PUBLIC_URL}/assets/images/logos/ngi_logo.png`}
            logo2={`${process.env.PUBLIC_URL}/assets/images/logos/eu_logo.png`}
            disclaimer={t('home.supportedBy.disclaimerNGI')}
            isDesktop={isDesktop}
        />
    );
}

export const SupporterCardPF = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSupportCard
            header={t('home.supportedBy.headerPF')}
            text={t('home.supportedBy.textPF')}
            logo1={`${process.env.PUBLIC_URL}/assets/images/logos/pf_logo.png`}
            logo2={`${process.env.PUBLIC_URL}/assets/images/logos/bmbf_logo.png`}
            isDesktop={isDesktop}
        />
    );
}


