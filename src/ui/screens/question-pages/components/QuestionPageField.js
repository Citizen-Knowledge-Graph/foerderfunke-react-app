import React, { useState } from 'react';
import { Typography, Collapse } from '@mui/material';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import ProfileSectionInputSwitch from "./input-types/ProfileSectionInputSwitch";
import { ExpandMore } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import theme from "@/theme";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';

const QuestionPageField = ({
    t,
    currentQuestion,
    value,
    setValue,
    error,
    handleAddClick
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <VBox sx={{ gap: 4 }}>
            <VBox sx={{ maxWidth: '800px' }}>
                <Typography variant='h2' sx={{ fontWeight: '400' }}>
                    {currentQuestion?.['schema:question']?.['@value']}
                </Typography>
                {currentQuestion?.['rdfs:comment']?.['@value']?.length > 0 && (
                    <HBox sx={{ alignItems: 'center' }}>
                        <Typography variant='body2'>
                            {t('app.questions.showComment')}
                        </Typography>
                        <IconButton
                            onClick={() => setIsVisible(!isVisible)}
                            sx={{
                                width: '40px',
                                transition: 'transform 0.3s',
                                transform: isVisible ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        >
                            <ExpandMore />
                        </IconButton>
                    </HBox>
                )}
                {
                    isVisible && (
                        <Collapse in={isVisible}>
                            <Typography variant='body2' sx={{ marginTop: 1 }}>
                                {currentQuestion?.['rdfs:comment']?.['@value']}
                            </Typography>
                        </Collapse>
                    )
                }
            </VBox>
            <HBox sx={{ 
                padding: "32px", 
                backgroundColor: 'white.main', 
                borderRadius: theme.shape.borderRadius 
            }}>
                <ProfileSectionInputSwitch 
                    t={t}
                    value={value}
                    setValue={setValue}
                    currentField={currentQuestion}
                    error={error} />
            </HBox>
            <RegularButton 
                variant={'blueContained'} 
                onClick={() => handleAddClick(value)}
                text={'app.questions.confirmBtn'} 
            />        
        </VBox>


    );
};

export default QuestionPageField;
