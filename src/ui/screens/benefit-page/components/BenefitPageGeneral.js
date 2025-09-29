import React from 'react';
import { Typography } from "@mui/material";
import theme from '@/theme';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import BenefitPageExample from './BenefitPageExample';

const BenefitPageGeneral = ({ benefitPageData }) => {

  console.log(benefitPageData);

  return (
    <VBox
      sx={{
        backgroundColor: 'white.main',
        padding: '32px',
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
        gap: 2,
      }}
    >
      <VBox sx={{ gap: 4 }}>
        <VBox sx={{ maxWidth: 800 }}>
          <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
            {benefitPageData?.title}
          </Typography>
          <BenefitPageMarkdownElement content={benefitPageData?.brief} />
        </VBox>
        <VBox sx={{ maxWidth: 800 }}>
          <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word" }}>
            Was erhalte ich?
          </Typography>
          <BenefitPageMarkdownElement content={benefitPageData?.scope} />
        </VBox>
        {
          benefitPageData?.examplesList && benefitPageData?.examplesList.length > 0 && benefitPageData.examplesList.map((example, idx) => (
            <BenefitPageExample key={idx} idx={idx + 1} content={example} />
          ))
        }

      </VBox>
    </VBox>
  );
};

export default BenefitPageGeneral;