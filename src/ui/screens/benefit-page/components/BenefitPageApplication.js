import React from 'react';
import { Typography } from "@mui/material";
import theme from '@/theme';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';

const BenefitPageApplication = ({ title }) => {

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
            Der Antrag
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.dark' }}>
            Die Arbeitsassistenz unterstützt Menschen mit Behinderungen dabei, einen Arbeitsplatz zu finden und sich im Arbeitsumfeld zurechtzufinden. Sie bietet individuelle Beratung, Begleitung und Unterstützung bei der Arbeitsplatzsuche, Bewerbung und Integration am Arbeitsplatz.
          </Typography>
        </VBox>
        <VBox sx={{ maxWidth: 800 }}>
          <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word" }}>
            Was erhalte ich?
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.dark' }}>
            Die Arbeitsassistenz unterstützt Menschen mit Behinderungen dabei, einen Arbeitsplatz zu finden und sich im Arbeitsumfeld zurechtzufinden. Sie bietet individuelle Beratung, Begleitung und Unterstützung bei der Arbeitsplatzsuche, Bewerbung und Integration am Arbeitsplatz.
          </Typography>
        </VBox>
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
          <VBox sx={{ maxWidth: 800 }}>
            <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word" }}>
              Beispiel 1
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.dark' }}>
              Herr Müller hat eine körperliche Behinderung und möchte gerne in einem Büro arbeiten. Die Arbeitsassistenz unterstützt ihn bei der Suche nach einem geeigneten Arbeitsplatz, hilft ihm bei der Erstellung seiner Bewerbungsunterlagen und begleitet ihn zu Vorstellungsgesprächen. Am neuen Arbeitsplatz sorgt die Arbeitsassistenz dafür, dass Herr Müller die notwendige Unterstützung erhält, um seine Aufgaben erfolgreich zu bewältigen.
            </Typography>
          </VBox>
        </VBox>
      </VBox>
    </VBox>
  );
};

export default BenefitPageApplication;