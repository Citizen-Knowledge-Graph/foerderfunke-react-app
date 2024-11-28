import VStack from "../../../shared-components/VStack";
import {IconButton, Typography} from "@mui/material";
import HStack from "../../../shared-components/HStack";
import globalStyles from "../../../styles/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, {useState} from "react";
import {useStore} from "../../../shared-components/ViewportUpdater";

const BenefitPageHeader = ({benefit}) => {
    const [leiKaInfo, setLeiKaInfo] = useState(false);
    const isDesktop = useStore((state) => state.isDesktop);
    const titleFontSize = isDesktop ? '32px' : '28px';

    return (
        <VStack gap={0} alignItems={'flex-start'} sx={{
            width: '100%',
            backgroundColor: globalStyles.colorDeepTealTransparent,
            padding: '16px',
            borderRadius: '12px'
        }}>
            <VStack>
                <Typography sx={{...styles.titleText, fontSize: titleFontSize}}>
                    {benefit.title}
                </Typography>
                <VStack>
                    <HStack alignItems={'center'}>
                        <Typography sx={styles.subTitleText}>
                            LeiKa-Id: {benefit.leikaId}
                        </Typography>
                        <IconButton
                            sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: globalStyles.colorLightGrey,
                                },
                            }}
                            onClick={() => setLeiKaInfo(!leiKaInfo)}
                        >
                            <InfoOutlinedIcon sx={{fontSize: 16, color: 'black'}}/>
                        </IconButton>
                    </HStack>
                    {leiKaInfo && (
                        <VStack sx={{backgroundColor: 'white', padding: '12px', borderRadius: '12px'}}>
                            <Typography sx={styles.subTitleText}>
                                LeiKa is a unique identifier for benefits in Germany. It helps you to
                                find
                                the right benefit for you.
                            </Typography>
                        </VStack>)}
                </VStack>
            </VStack>
        </VStack>
    );
}


const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'black',
        textTransform: 'none',
    },
}

export default BenefitPageHeader;
