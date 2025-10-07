import React from 'react';
import { Typography, Box } from "@mui/material";
import theme from '@/theme';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import BenefitPageExample from './BenefitPageExample';

const BenefitPageGeneral = ({ t, benefitPageData, isDesktop }) => {
  const starWoman = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/student.png`;

  return (
    <VBox
      sx={{
        backgroundColor: 'white.main',
        padding: { xs: '32px 20px', md: '32px' },
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
        gap: 2,
      }}
    >
      <VBox sx={{ gap: 4 }}>
        <HBox gap={1} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <VBox sx={{ flex: 3, maxWidth: 800 }}>
            <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
              {benefitPageData?.title}
            </Typography>
            <BenefitPageMarkdownElement content={benefitPageData?.brief} />
          </VBox>
          {
            isDesktop && (
              <VBox sx={{ flex: 1, alignItems: 'flex-end' }}>
                <img src={starWoman} alt="logo" style={{ width: "125px" }} />
              </VBox>
            )
          }
        </HBox>
        <Box sx={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', gap: 4 }}>
          {
            benefitPageData?.examplesList && benefitPageData?.examplesList.length > 0 && benefitPageData.examplesList.map((example, idx) => (
              <BenefitPageExample t={t} key={idx} idx={idx + 1} content={example} />

            ))
          }
        </Box>
      </VBox>
    </VBox>
  );
};

export default BenefitPageGeneral;