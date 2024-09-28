import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../../../styles/styles";

const MilestoneElement = ({ milestone }) => {
    return (
        <VStack>
            <HStack justifyContent={'space-between'}>
                <Typography sx={styles.title}>
                    {milestone.title}
                </Typography>
                <Typography sx={styles.date}>
                    {milestone.date}
                </Typography>
            </HStack>
            <HStack>
                <Typography>
                    {milestone.description}
                </Typography>
            </HStack>
        </VStack>
    )
}

const styles = {
    title: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    date: {
        fontSize: '16px',
        fontWeight: '300',
        color: globalStyles.colorDarkGrey,
        textAlign: 'right'
    },
}

export default MilestoneElement;
