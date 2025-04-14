import React, { useLayoutEffect, useRef } from "react";
import { VBox } from "./LayoutBoxes";
import Loading from "./Loading";
import { useStore } from "./ViewportUpdater";
import theme from "@/theme";
import AppScreenNavigation from "./AppScreenNavigation";

const AppScreenWrapper = ({ children, isLoading, scrollKey, backTarget }) => {
    const wrapperRef = useRef(null);
    const isDesktop = useStore((state) => state.isDesktop);
    const hasScrolled = useRef(false);

    useLayoutEffect(() => {
        if (!wrapperRef.current) return;

        if (!hasScrolled.current || scrollKey != null) {
            if (isDesktop) {
                const rect = wrapperRef.current.getBoundingClientRect();
                const absoluteTop = rect.top + window.pageYOffset;
                const topPaddingOffset = 48;
                window.scrollTo({
                    top: absoluteTop - topPaddingOffset,
                    behavior: 'smooth',
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
            hasScrolled.current = true;
        }
    }, [scrollKey, isDesktop]);

    return (
        <VBox
            sx={{
                width: '100%',
                minHeight: '100vh'
            }}
        >
            <VBox
                ref={wrapperRef}
                sx={{
                    alignItems: 'center',
                    width: {
                        xs: 'calc(100% - 48px)',
                        md: 'calc(100% - 192px)',
                    },
                    backgroundColor: 'greyTransparent.main',
                    borderRadius: theme.shape.borderRadius,
                    padding: {
                        xs: '32px 24px',
                        md: '96px 108px',
                    },
                    boxSizing: "border-box",
                    margin: {
                        xs: '0px 24px 24px 24px',
                        md: '0px 96px 96px 96px',
                    },
                }}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    <VBox
                        sx={{
                            width: '100%',
                            gap: {
                                xs: 4,
                                md: 8
                            }
                        }}>
                        <VBox sx={{ width: '100%', boxSizing: "border-box" }}>
                            {children}
                        </VBox>
                        <AppScreenNavigation backTarget={backTarget} />
                    </VBox>
                )}
            </VBox>
        </VBox>
    );
}

export default AppScreenWrapper;