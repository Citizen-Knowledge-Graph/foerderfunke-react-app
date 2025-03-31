import React, { useContext } from 'react';
import { Typography, Button } from '@mui/material';
import { HBox } from "@/ui/shared-components/LayoutBoxes";
import { LanguageContext } from "@/ui/language/LanguageContext";
import theme from "../../../../theme";

const ClickableTopicBox = ({ topic, onClick }) => {
    const { language } = useContext(LanguageContext);

    return (
        <HBox>
            <Button
                onClick={() => onClick(topic)}
                sx={{
                    flex: 1,
                    justifyContent: 'center',
                    padding: '32px',
                    borderRadius: theme.shape.borderRadius,
                    borderColor: 'yellow.main',
                    backgroundColor: topic.isSelected ? 'yellow.main' : 'white.main',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                    '&:focus': {
                        backgroundColor: topic.isSelected ? 'yellow.main' : 'transparent',
                        outline: 'none',
                    },
                    '&:hover': {
                        backgroundColor: 'yellow.main',
                        borderColor: 'yellow.main',
                        '@media (hover: none)': {
                            backgroundColor: topic.isSelected ? 'yellow.main' : 'transparent',
                        },
                    },
                }}
            >
                <Typography variant="body1" sx={{ whiteSpace: 'wrap' }}>
                    {language === "de" ? topic.title.de : topic.title.en}
                </Typography>
            </Button>
        </HBox>
    );
};

export default ClickableTopicBox;