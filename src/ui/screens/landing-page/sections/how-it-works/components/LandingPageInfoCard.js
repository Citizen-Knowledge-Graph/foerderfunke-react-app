import { Typography } from "@mui/material";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";

const LandingPageInfoCard = ({ isDesktop, title, text, onMouseLeave, onMouseEnter, hovered, image }) => {
    return (
        <VBox
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            sx={{
                alignItems: 'center',
                gap: theme.spacing(4),
                padding: theme.spacing(4),
                backgroundColor: hovered ? theme.palette.yellow.main : `${theme.palette.white.dark}40`,
                borderRadius: theme.shape.borderRadius,
                transition: 'background-color 0.2s'
            }}
        >
            <VBox gap={1}>
                <HBox>
                    <Typography variant="h4" sx={{
                        fontWeight: 400,
                        color: hovered ? theme.palette.black.main : theme.palette.pink.main,
                    }}>
                        {title}
                    </Typography>
                </HBox>
                <HBox>
                    <Typography variant="body1">
                        {text}
                    </Typography>
                </HBox>
            </VBox>
            {
                !isDesktop && <img
                    src={image}
                    style={{
                        maxWidth: '250px',
                        height: 'auto',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'} />
            }
        </VBox>
    );
}

export default LandingPageInfoCard;
