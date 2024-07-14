/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <Global
        styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

            body {
                font-family: 'Inter', sans-serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        `}
    />
);

export default GlobalStyles;
