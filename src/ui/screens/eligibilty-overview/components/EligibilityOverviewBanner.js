import { Typography } from "@mui/material";
import { HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";

const EligibilityOverviewBanner = ({ t, eligible }) => {
    const eligibilityBannerType = (() => {
        switch (eligible) {
            case 'eligible':
                return {
                    text: 'app.browseAll.item.eligible',
                    backgroundColor: 'secondary.light'
                }
            case 'preliminary-eligible':
                return {
                    text: 'app.browseAll.item.preliminaryEligible',
                    backgroundColor: 'yellow.main'
                }
            case 'non-eligible':
                return {
                    text: 'app.browseAll.item.notEligible',
                    backgroundColor: 'error.light'
                }
            default:
                return {
                    text: 'app.browseAll.item.missingData',
                    backgroundColor: theme.palette.black.main
                }
        }
    })();

    return (
        <HBox sx={{
            backgroundColor: eligibilityBannerType.backgroundColor,
            padding: "8px 12px",
            borderRadius: theme.shape.borderRadius,
            alignItems: 'center',
        }}>
            <Typography>{t(eligibilityBannerType.text)}</Typography>
        </HBox>
    );
}
export default EligibilityOverviewBanner;