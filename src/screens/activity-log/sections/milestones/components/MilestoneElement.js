import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../../../styles/styles";
import ReactMarkdown from "react-markdown";

const MilestoneElement = ({ milestone, showBorderBottom }) => {
    const borderBottom = showBorderBottom ? '1px solid rgba(252, 215, 85)' : 'none';

    return (
        <VStack sx={{...styles.milestoneBox, borderBottom: borderBottom}}>
            <HStack justifyContent={'space-between'}>
                <Typography sx={styles.title}>
                    {milestone.title}
                </Typography>
                <Typography sx={styles.date}>
                    {milestone.date}
                </Typography>
            </HStack>
            <HStack>
                <ReactMarkdown>
                    {milestone.description}
                </ReactMarkdown>
            </HStack>
        </VStack>
    )
}

const styles = {
    milestoneBox: {
        paddingBottom: '16px',
        paddingTop: '0px',
    },
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
