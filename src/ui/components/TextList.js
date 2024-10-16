import VStack from "./VStack";
import HStack from "./HStack";
import {Typography} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

const TextList = ({items}) => {
    return (
        <VStack sx={{width: "100%"}} gap={0}>
            {items.map((item, index) => (
                <HStack gap={1} justifyContent={'flex-start'} alignItems={'center'} key={index}>
                    <CircleIcon sx={{fontSize: '8px'}}/>
                    <Typography variant="body1">{item}</Typography>
                </HStack>
            ))}
        </VStack>
    )
};

export default TextList;
