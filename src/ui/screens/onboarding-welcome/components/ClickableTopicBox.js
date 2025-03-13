import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { HBox } from "../../../shared-components/LayoutBoxes";
import { LanguageContext } from "../../../language/LanguageContext";
import theme from "../../../../theme";

const ClickableTopicBox = ({ topic, index, category, isSelected, onClick }) => {
    const { language } = useContext(LanguageContext);

    return (
        <HBox>
            <HBox
                onClick={() => onClick(topic, index, category)}
                sx={{
                    flex: 1,
                    justifyContent: 'center',
                    padding: '32px',
                    borderRadius: theme.shape.borderRadius,
                    borderColor: theme.palette.primary.main,
                    backgroundColor: isSelected ? theme.palette.yellow.main : theme.palette.white.main,
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                    '&:focus': {
                        backgroundColor: isSelected ? theme.palette.yellow.main : 'transparent',
                        outline: 'none',
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.yellow.main,
                        borderColor: theme.palette.yellow.main,
                        '@media (hover: none)': {
                            backgroundColor: isSelected ? theme.palette.yellow.main : 'transparent',
                        },
                    },
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: '400', whiteSpace: 'wrap' }}>
                    {language === "de" ? topic.title.de : topic.title.en}
                </Typography>
            </HBox>
        </HBox>
    );
};

export default ClickableTopicBox;