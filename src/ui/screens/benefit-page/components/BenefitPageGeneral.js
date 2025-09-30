import React from 'react';
import { Typography } from "@mui/material";
import theme from '@/theme';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import BenefitPageExample from './BenefitPageExample';

const BenefitPageGeneral = ({ benefitPageData, isDesktop }) => {
  const starWoman = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/lightbulb.svg`;

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
        <HBox gap={1} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <VBox sx={{ maxWidth: 800 }}>
            <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
              {benefitPageData?.title}
            </Typography>
            <BenefitPageMarkdownElement content={benefitPageData?.brief} />
          </VBox>
          {
            isDesktop && (
              <img src={starWoman} alt="logo" style={{ width: "125px" }} />
            )
          }
        </HBox>
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