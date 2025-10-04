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
  benefitPageData
}) => {
  const [open, setOpen] = useState(false);
  const objectIcon = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/airplane.svg`;

  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" id="Defs_forschungszulage_bsfz_finanzamt" targetNamespace="https://example.org/bpmn#" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="18.6.1">
  <bpmn:process id="p_fzul" isExecutable="false">
    <bpmn:laneSet id="ls_fzul">
      <bpmn:lane id="lane_company" name="Unternehmen (Antragsteller:in)">
        <bpmn:flowNodeRef>s</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t0</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t1</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t6</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>e_no</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t5</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="lane_bsfz" name="BSFZ (Bescheinigungsstelle Forschungszulage)">
        <bpmn:flowNodeRef>t2</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>g1</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t3</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="lane_tax" name="Finanzamt (Steuerfestsetzung)">
        <bpmn:flowNodeRef>e_ok</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t7</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>g2</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t4</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="s" name="Start">
      <bpmn:outgoing>f0</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:manualTask id="t0" name="Projektbeschreibung &#38; Kostenaufstellung erstellen">
      <bpmn:incoming>f0</bpmn:incoming>
      <bpmn:outgoing>f1</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="t1" name="BSFZ-Antrag online einreichen">
      <bpmn:incoming>f1</bpmn:incoming>
      <bpmn:outgoing>f2</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:userTask id="t2" name="Inhaltliche Prüfung (FuE-Kriterien)">
      <bpmn:incoming>f2</bpmn:incoming>
      <bpmn:outgoing>f3</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="g1" name="BSFZ-Bescheinigung erteilt?">
      <bpmn:incoming>f3</bpmn:incoming>
      <bpmn:outgoing>fy1</bpmn:outgoing>
      <bpmn:outgoing>fn1</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sendTask id="t3" name="Bescheinigung bereitstellen">
      <bpmn:incoming>fy1</bpmn:incoming>
      <bpmn:outgoing>f4</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:manualTask id="t5" name="Steuerantrag (ELSTER) mit Bescheinigung einreichen">
      <bpmn:incoming>f4</bpmn:incoming>
      <bpmn:outgoing>f5</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:manualTask id="t6" name="Projekt überarbeiten &#38; erneut einreichen">
      <bpmn:incoming>fn1</bpmn:incoming>
      <bpmn:outgoing>f6</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:userTask id="t4" name="Steuerliche Prüfung &#38; Festsetzung">
      <bpmn:incoming>f5</bpmn:incoming>
      <bpmn:outgoing>f7</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="g2" name="Festsetzung bewilligt?">
      <bpmn:incoming>f7</bpmn:incoming>
      <bpmn:outgoing>fy2</bpmn:outgoing>
      <bpmn:outgoing>fn2</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sendTask id="t7" name="Bescheid erlassen / Zulage anrechnen">
      <bpmn:incoming>fy2</bpmn:incoming>
      <bpmn:outgoing>f8</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:endEvent id="e_ok" name="Bewilligt">
      <bpmn:incoming>f8</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="e_no" name="Abgelehnt">
      <bpmn:incoming>fn2</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="f0" sourceRef="s" targetRef="t0" />
    <bpmn:sequenceFlow id="f1" sourceRef="t0" targetRef="t1" />
    <bpmn:sequenceFlow id="f2" sourceRef="t1" targetRef="t2" />
    <bpmn:sequenceFlow id="f3" sourceRef="t2" targetRef="g1" />
    <bpmn:sequenceFlow id="fy1" name="ja" sourceRef="g1" targetRef="t3" />
    <bpmn:sequenceFlow id="fn1" name="nein" sourceRef="g1" targetRef="t6" />
    <bpmn:sequenceFlow id="f4" sourceRef="t3" targetRef="t5" />
    <bpmn:sequenceFlow id="f6" sourceRef="t6" targetRef="t1" />
    <bpmn:sequenceFlow id="f5" sourceRef="t5" targetRef="t4" />
    <bpmn:sequenceFlow id="f7" sourceRef="t4" targetRef="g2" />
    <bpmn:sequenceFlow id="fy2" name="ja" sourceRef="g2" targetRef="t7" />
    <bpmn:sequenceFlow id="fn2" name="nein" sourceRef="g2" targetRef="e_no" />
    <bpmn:sequenceFlow id="f8" sourceRef="t7" targetRef="e_ok" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="D_fzul">
    <bpmndi:BPMNPlane id="P_fzul" bpmnElement="p_fzul">
      <bpmndi:BPMNShape id="L_tax" bpmnElement="lane_tax" isHorizontal="true" color:background-color="#F5F8FF" color:border-color="#A3A3A3">
        <dc:Bounds x="150" y="340" width="2760" height="160" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="L_bsfz" bpmnElement="lane_bsfz" isHorizontal="true" color:background-color="#FFFDF0" color:border-color="#A3A3A3">
        <dc:Bounds x="150" y="200" width="2760" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="L_company" bpmnElement="lane_company" isHorizontal="true" color:background-color="#F6FFF6" color:border-color="#A3A3A3">
        <dc:Bounds x="150" y="80" width="2760" height="120" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="S_s" bpmnElement="s" color:background-color="#F0FFF4" color:border-color="#047857">
        <dc:Bounds x="200" y="122" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t0" bpmnElement="t0" color:background-color="#E8F7E8" color:border-color="#2E7D32">
        <dc:Bounds x="270" y="110" width="320" height="60" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t1" bpmnElement="t1" color:background-color="#E8F7E8" color:border-color="#2E7D32">
        <dc:Bounds x="640" y="110" width="260" height="60" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t6" bpmnElement="t6" color:background-color="#FFF7ED" color:border-color="#B45309">
        <dc:Bounds x="980" y="110" width="300" height="60" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t2" bpmnElement="t2" color:background-color="#FFF7E6" color:border-color="#B45309">
        <dc:Bounds x="950" y="240" width="300" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="E_no" bpmnElement="e_no" color:background-color="#FEF2F2" color:border-color="#B91C1C">
        <dc:Bounds x="2802" y="122" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2795" y="158" width="50" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="E_ok" bpmnElement="e_ok" color:background-color="#ECFDF5" color:border-color="#059669">
        <dc:Bounds x="2802" y="397" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2800" y="433" width="41" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t7" bpmnElement="t7" color:background-color="#EAF0FF" color:border-color="#1E40AF">
        <dc:Bounds x="2460" y="380" width="260" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="G_g2" bpmnElement="g2" isMarkerVisible="true" color:background-color="#F5F5F5" color:border-color="#6B7280">
        <dc:Bounds x="2345" y="390" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2340" y="440" width="60" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t4" bpmnElement="t4" color:background-color="#EAF0FF" color:border-color="#1E40AF">
        <dc:Bounds x="1960" y="380" width="300" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t5" bpmnElement="t5" color:background-color="#E8F7E8" color:border-color="#2E7D32">
        <dc:Bounds x="1700" y="110" width="360" height="60" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="G_g1" bpmnElement="g1" isMarkerVisible="true" color:background-color="#F5F5F5" color:border-color="#6B7280">
        <dc:Bounds x="1315" y="250" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1304" y="300" width="73" height="40" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="T_t3" bpmnElement="t3" color:background-color="#FFF7E6" color:border-color="#B45309">
        <dc:Bounds x="1430" y="240" width="260" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="f0d" bpmnElement="f0">
        <di:waypoint x="236" y="140" />
        <di:waypoint x="270" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f1d" bpmnElement="f1">
        <di:waypoint x="590" y="140" />
        <di:waypoint x="640" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f2d" bpmnElement="f2">
        <di:waypoint x="900" y="140" />
        <di:waypoint x="925" y="140" />
        <di:waypoint x="925" y="275" />
        <di:waypoint x="950" y="275" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f3d" bpmnElement="f3">
        <di:waypoint x="1250" y="275" />
        <di:waypoint x="1315" y="275" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="fy1d" bpmnElement="fy1">
        <di:waypoint x="1365" y="275" />
        <di:waypoint x="1430" y="275" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1396" y="250" width="9" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="fn1d" bpmnElement="fn1">
        <di:waypoint x="1340" y="250" />
        <di:waypoint x="1340" y="140" />
        <di:waypoint x="1280" y="140" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1345" y="185" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f4d" bpmnElement="f4">
        <di:waypoint x="1690" y="275" />
        <di:waypoint x="1880" y="275" />
        <di:waypoint x="1880" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f5d" bpmnElement="f5">
        <di:waypoint x="2060" y="160" />
        <di:waypoint x="2060" y="275" />
        <di:waypoint x="2110" y="275" />
        <di:waypoint x="2110" y="380" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f7d" bpmnElement="f7">
        <di:waypoint x="2260" y="415" />
        <di:waypoint x="2345" y="415" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="fy2d" bpmnElement="fy2">
        <di:waypoint x="2395" y="415" />
        <di:waypoint x="2460" y="415" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2425" y="390" width="9" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="fn2d" bpmnElement="fn2">
        <di:waypoint x="2370" y="390" />
        <di:waypoint x="2370" y="140" />
        <di:waypoint x="2802" y="140" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2375" y="255" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f8d" bpmnElement="f8">
        <di:waypoint x="2720" y="415" />
        <di:waypoint x="2802" y="415" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

`;

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