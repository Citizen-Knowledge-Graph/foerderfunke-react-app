import VStack from "./VStack";

const InlayLayout = ({ children }) => (
    <VStack sx={{ width: "100%", padding: "16px", boxSizing: "border-box" }} data-testid={'inlayout'}>
        {children}
    </VStack>
    );


export default InlayLayout;
