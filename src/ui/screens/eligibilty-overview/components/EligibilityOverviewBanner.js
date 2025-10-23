import { Typography } from "@mui/material";
import { HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const EligibilityOverviewBanner = ({ t, eligible }) => {
    const eligibilityBannerType = (() => {
        switch (eligible) {
            case 'eligible':
                return {
                    text: 'app.browseAll.item.eligible',
                    border: '1px solid rgba(11, 175, 18, 0.2)',
                    backgroundColor: 'secondary.light'
                }
            case 'preliminary-eligible':
                return {
                    text: 'app.browseAll.item.preliminaryEligible',
                    border: '1px solid rgba(11, 175, 18, 0.2)',
                    backgroundColor: 'yellow.main'
                }
            case 'non-eligible':
                return {
                    text: 'app.browseAll.item.notEligible',
                    border: '1px solid rgba(255, 0, 0, 0.2)',
                    backgroundColor: 'error.light'
                }
            default:
                return {
                    text: 'app.browseAll.item.missingData',
                    backgroundColor: theme.palette.black.main
                }
        }
    })();

    const eligibilityIcon = (() => {
        switch (eligible) {
            case 'eligible':
                return <CheckIcon sx={{ fontSize: '16px' }} />;
            case 'non-eligible':
                return <ClearIcon sx={{ fontSize: '16px' }} />;
            default:
                return <ClearIcon sx={{ fontSize: '16px' }} />;
        }
    })();

    return (
        <HBox sx={{
            backgroundColor: eligibilityBannerType.backgroundColor,
            border: eligibilityBannerType.border || 'none',
            padding: '6px 18px',
            borderRadius: theme.shape.borderRadius,
            alignItems: 'center',
            gap: 1,
        }}>
            <Typography variant="body1">{t(eligibilityBannerType.text)}</Typography>
            {eligibilityIcon}
        </HBox>
    );
}
export default EligibilityOverviewBanner;