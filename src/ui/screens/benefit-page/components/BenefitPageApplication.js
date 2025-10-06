import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import theme from '@/theme';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import BpmnViewer from '@/ui/shared-components/bpmn-viewer/BpmnViewer';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';

const BenefitPageApplication = ({
  t,
  isDesktop,
  benefitPageData,
  xml
}) => {
  const [open, setOpen] = useState(false);
  const objectIcon = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/airplane.svg`;

  return (
    <VBox
      sx={{
        backgroundColor: 'white.main',
        padding: '32px',
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
        gap: 4,
      }}
    >
      <VBox sx={{ gap: { xs: 4, md: 8 } }} >
        <HBox gap={1} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <VBox sx={{ flex: 3, maxWidth: 800, gap: 4 }}>
            <VBox>
              <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
                {t('app.benefitPage.applicationProcess.title')}
              </Typography>
              <BenefitPageMarkdownElement content={benefitPageData?.applicationProcess} />
            </VBox>
            <RegularButton
              onClick={() => setOpen(!open)}
              variant={'whiteOutlinedBlue'}
              text={open ? 'app.benefitPage.applicationProcess.btnClose' : 'app.benefitPage.applicationProcess.btn'}
              size={'small'}
            />
          </VBox>
          {
            isDesktop && (
              <VBox sx={{ flex: 1, alignItems: 'flex-end' }}>
                <img src={objectIcon} alt="logo" style={{ width: "125px" }} />
              </VBox>
            )
          }
        </HBox>
        {
          open && (
            <>
              {
                benefitPageData?.necessaryDocuments?.length > 0 && (
                  <VBox
                    sx={{
                      backgroundColor: 'greyTransparent.main',
                      borderTop: `1px solid ${theme.palette.grey.light}`,
                      borderRadius: theme.shape.borderRadius,
                      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                      padding: 2,
                      gap: 2,
                    }}
                  >

                    <VBox sx={{ gap: 2 }}>
                      <VBox sx={{ gap: 2, maxWidth: 800 }}>
                        <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word", color: 'pink.main' }}>
                          {t('app.benefitPage.applicationProcess.necessaryDocuments.title')}
                        </Typography>
                        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                          {t('app.benefitPage.applicationProcess.necessaryDocuments.text')}
                        </Typography>
                      </VBox>
                      <VBox
                        sx={{
                          backgroundColor: '#fff',
                          p: 4,
                          borderRadius: theme.shape.borderRadius,
                          backgroundImage: 'radial-gradient(#eff1f3 1px, transparent 1.5px)',
                          backgroundSize: '16px 16px',
                          backgroundPosition: '0 0',
                        }}
                      >
                        <FormGroup>
                          {
                            benefitPageData.necessaryDocuments.map((doc, idx) => (
                              <FormControlLabel key={idx} control={<Checkbox />} label={doc} />
                            ))
                          }
                        </FormGroup>
                      </VBox>
                    </VBox>
                  </VBox>
                )
              }
              <VBox
                sx={{
                  backgroundColor: 'greyTransparent.main',
                  borderTop: `1px solid ${theme.palette.grey.light}`,
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                  padding: 2,
                  gap: 2,
                }}
              >
                <VBox sx={{ gap: 2 }}>
                  <VBox sx={{ maxWidth: 800 }}>
                    <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word", color: 'pink.main' }}>
                      {t('app.benefitPage.applicationProcess.process.title')}
                    </Typography>
                    <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                      {t('app.benefitPage.applicationProcess.process.text')}
                    </Typography>
                  </VBox>
                  <BpmnViewer xml={xml} />
                </VBox>
              </VBox>
            </>
          )
        }
      </VBox>
    </VBox>
  );
};

export default BenefitPageApplication;