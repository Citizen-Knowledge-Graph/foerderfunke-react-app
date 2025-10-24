import { Typography } from "@mui/material";
import { HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import GroupsIcon from '@mui/icons-material/Groups';

const EligibilityOverviewOrgTag = ({ t }) => {
    return (
        <HBox sx={{
            backgroundColor: theme.palette.custom.plumPurpleTransparent,
            padding: '6px 18px',
            borderRadius: theme.shape.borderRadius,
            alignItems: 'center',
            gap: 1
        }}>
            <Typography variant="body1">{t("app.browseAll.orgTag")}</Typography>
            <GroupsIcon sx={{ fontSize: 20 }} />
        </HBox>
    );
}
export default EligibilityOverviewOrgTag;