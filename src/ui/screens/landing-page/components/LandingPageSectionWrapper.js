import React from "react";
import {VBox} from "@/ui/shared-components/LayoutBoxes";
import {useStore} from "@/ui/shared-components/ViewportUpdater";

const LandingPageSectionWrapper = ({backgroundColor= null, children, fullWidth = false}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const horizontalPadding = fullWidth ? 0 : isDesktop ? '96px' : '28px';
    const verticalPadding = fullWidth ? 0 : isDesktop ? '80px' : '60px';

    return (
        <VBox sx={{
            backgroundColor: backgroundColor,
            width: '100%',
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding,
            boxSizing: 'border-box',
        }}>
            {children}
        </VBox>
    );
}

export default LandingPageSectionWrapper;
