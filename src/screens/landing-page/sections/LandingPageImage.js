import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";

const LandingPageImage = ({url}) => {

    return (
        <VStack alignItems={'center'} sx={{width: "100%"}}>
            <HStack justifyContent={'center'}>
                <img src={url} alt="Landing Page" style={{width: "100%"}}/>
            </HStack>
        </VStack>
    )
}

export default LandingPageImage;
