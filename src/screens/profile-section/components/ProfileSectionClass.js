import React, {useState} from "react";
import HStack from "../../../components/HStack";
import VStack from "../../../components/VStack";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {green, yellow} from "@mui/material/colors";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ClearIcon from '@mui/icons-material/Clear';
import ButtonBase from "@mui/material/ButtonBase";

const ProfileSectionClass = ({profileSectionField, entityData}) => {
    const [objects, setObjects] = useState([]);

    const handleAddObjectLink = () => {
        setObjects([...objects, {}]);
    };

    const handleRemoveObject = (index) => {
        setObjects(objects.filter((_, i) => i !== index));
    };

    return (
        <VStack sx={{width: '100%'}}>
            <HStack justifyContent={'flex-start'}>
                <Button variant="body1" onClick={handleAddObjectLink} sx={styles.buttonText}>
                    Hinzufügen
                </Button>
            </HStack>
            <VStack gap={2}>
                {objects.map((_, index) => (
                    <HStack key={index} sx={{width: '100%'}} justifyContent={'space-between'}>
                        <HStack alignItems={'center'}>
                            <Card sx={styles.iconCard}>
                                <CardContent sx={styles.iconCardContent} data-testid="card-content">
                                    <SentimentSatisfiedOutlinedIcon sx={styles.icon}/>
                                </CardContent>
                            </Card>
                            <Typography>{index}</Typography>
                        </HStack>
                        <HStack alignItems={'center'} gap={3}>
                            <ButtonBase onClick={() => handleRemoveObject(index)}>
                                <ClearIcon/>
                            </ButtonBase>
                            <ArrowForwardIosOutlinedIcon/>
                        </HStack>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    );
}

const styles = {
    buttonText: {
        fontSize: '12px',
        borderRadius: '15px',
        fontWeight: 'bold',
        margin: '0px',
        backgroundColor: green[500],
        '&:focus': {
            backgroundColor: green[500],
        },
        '&:hover': {
            backgroundColor: green[500],
        },
    },
    iconCard: {
        width: '50px',
        height: '50px',
        boxShadow: 'none',
        backgroundColor: yellow[500],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        "&:last-child": {
            paddingBottom: '0px',
        }
    },
};

export default ProfileSectionClass;
