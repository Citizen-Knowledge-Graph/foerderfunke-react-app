import {Typography} from "@mui/material";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";

const LandingPageInfoCard = ({title, text, onMouseLeave, onMouseEnter, hovered}) => {
    return (
        <VBox gap={0}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                sx={{
                    maxWidth: '424px',
                    padding: theme.spacing(4),
                    backgroundColor: hovered ? theme.palette.yellow.main : `${theme.palette.white.dark}40`,
                    borderRadius: theme.shape.borderRadius,
                    transition: 'background-color 0.2s',
                    boxShadow: `0px 1px 2px ${theme.palette.black.main}40`,
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
        </VBox>
    );
}

export default LandingPageInfoCard;
