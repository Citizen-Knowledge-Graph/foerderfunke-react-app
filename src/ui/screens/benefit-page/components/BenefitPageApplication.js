import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import theme from '@/theme';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import BpmnViewer from '@/ui/shared-components/bpmn-viewer/BpmnViewer';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';

const BenefitPageApplication = ({ benefitPageData }) => {
  const [open, setOpen] = useState(false);

  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" id="Defs_lane_colored_centered" targetNamespace="https://example.org/bpmn#" exporter="Camunda Modeler" exporterVersion="5.38.1">
  <bpmn:process id="p" isExecutable="false">
    <bpmn:laneSet id="ls">
      <bpmn:lane id="lane_drv" name="Deutsche Rentenversicherung (DRV)">
        <bpmn:flowNodeRef>t4</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t3</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t2</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t1</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>g</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>e_ok</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="lane_user" name="Antragsteller:in">
        <bpmn:flowNodeRef>t0</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>t5</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>s</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>e_no</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="s" name="Start">
      <bpmn:outgoing>f0</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:manualTask id="t0" name="Antrag stellen">
      <bpmn:incoming>f0</bpmn:incoming>
      <bpmn:outgoing>Flow_0z8idn9</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:userTask id="t1" name="Unterlagen prüfen">
      <bpmn:incoming>Flow_0z8idn9</bpmn:incoming>
      <bpmn:outgoing>f2</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="t2" name="Voraussetzungen prüfen">
      <bpmn:incoming>f2</bpmn:incoming>
      <bpmn:outgoing>f3</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="t3" name="Entscheidung treffen">
      <bpmn:incoming>f3</bpmn:incoming>
      <bpmn:outgoing>f4</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="g" name="Bewilligt?">
      <bpmn:incoming>f4</bpmn:incoming>
      <bpmn:outgoing>fy</bpmn:outgoing>
      <bpmn:outgoing>fn</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sendTask id="t4" name="Bescheid zuschicken">
      <bpmn:incoming>fy</bpmn:incoming>
      <bpmn:outgoing>f5</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:endEvent id="e_ok" name="Bewilligt">
      <bpmn:incoming>f5</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:manualTask id="t5" name="Widerspruch möglich">
      <bpmn:incoming>fn</bpmn:incoming>
      <bpmn:outgoing>f6</bpmn:outgoing>
    </bpmn:manualTask>
    <bpmn:endEvent id="e_no" name="Abgelehnt">
      <bpmn:incoming>f6</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="f0" sourceRef="s" targetRef="t0" />
    <bpmn:sequenceFlow id="f2" sourceRef="t1" targetRef="t2" />
    <bpmn:sequenceFlow id="f3" sourceRef="t2" targetRef="t3" />
    <bpmn:sequenceFlow id="f4" sourceRef="t3" targetRef="g" />
    <bpmn:sequenceFlow id="fy" name="ja" sourceRef="g" targetRef="t4" />
    <bpmn:sequenceFlow id="fn" name="nein" sourceRef="g" targetRef="t5" />
    <bpmn:sequenceFlow id="f5" sourceRef="t4" targetRef="e_ok" />
    <bpmn:sequenceFlow id="f6" sourceRef="t5" targetRef="e_no" />
    <bpmn:sequenceFlow id="Flow_0z8idn9" sourceRef="t0" targetRef="t1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="D">
    <bpmndi:BPMNPlane id="P" bpmnElement="p">
      <bpmndi:BPMNShape id="L_drv" bpmnElement="lane_drv" isHorizontal="true" color:background-color="#F5F8FF" color:border-color="#A3A3A3">
        <dc:Bounds x="160" y="200" width="1500" height="160" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="L_user" bpmnElement="lane_user" isHorizontal="true" color:background-color="#F6FFF6" color:border-color="#A3A3A3">
        <dc:Bounds x="160" y="80" width="1500" height="120" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Ds" bpmnElement="s" color:background-color="#F0FFF4" color:border-color="#047857">
        <dc:Bounds x="200" y="122" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="206" y="158" width="24" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Dt0" bpmnElement="t0" color:background-color="#E8F7E8" color:border-color="#2E7D32">
        <dc:Bounds x="260" y="110" width="160" height="60" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Dt5" bpmnElement="t5" color:background-color="#E8F7E8" color:border-color="#2E7D32">
        <dc:Bounds x="1335" y="110" width="180" height="60" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Dt4" bpmnElement="t4" color:background-color="#EAF0FF" color:border-color="#1E40AF">
        <dc:Bounds x="1335" y="245" width="170" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Dg" bpmnElement="g" isMarkerVisible="true" color:background-color="#F5F5F5" color:border-color="#6B7280">
        <dc:Bounds x="1205" y="255" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1207" y="309" width="47" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Dt3" bpmnElement="t3" color:background-color="#EAF0FF" color:border-color="#1E40AF">
        <dc:Bounds x="970" y="245" width="180" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Dt2" bpmnElement="t2" color:background-color="#EAF0FF" color:border-color="#1E40AF">
        <dc:Bounds x="720" y="245" width="200" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Dt1" bpmnElement="t1" color:background-color="#EAF0FF" color:border-color="#1E40AF">
        <dc:Bounds x="500" y="245" width="160" height="70" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Deno" bpmnElement="e_no" color:background-color="#FEF2F2" color:border-color="#B91C1C">
        <dc:Bounds x="1552" y="122" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1545" y="162" width="50" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Deok" bpmnElement="e_ok" color:background-color="#FEF2F2" color:border-color="#B91C1C">
        <dc:Bounds x="1552" y="262" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1550" y="302" width="41" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="f0d" bpmnElement="f0" color:border-color="#2E7D32">
        <di:waypoint x="236" y="140" />
        <di:waypoint x="260" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0z8idn9_di" bpmnElement="Flow_0z8idn9">
        <di:waypoint x="420" y="140" />
        <di:waypoint x="460" y="140" />
        <di:waypoint x="460" y="280" />
        <di:waypoint x="500" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f6d" bpmnElement="f6" color:border-color="#B91C1C">
        <di:waypoint x="1515" y="140" />
        <di:waypoint x="1552" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="fnd" bpmnElement="fn" color:border-color="#2E7D32">
        <di:waypoint x="1230" y="255" />
        <di:waypoint x="1230" y="140" />
        <di:waypoint x="1335" y="140" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1235" y="225" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f5d" bpmnElement="f5" color:border-color="#B91C1C">
        <di:waypoint x="1505" y="280" />
        <di:waypoint x="1552" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="fyd" bpmnElement="fy" color:border-color="#1E40AF">
        <di:waypoint x="1255" y="280" />
        <di:waypoint x="1335" y="280" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1282" y="261" width="9" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f4d" bpmnElement="f4" color:border-color="#6B7280">
        <di:waypoint x="1150" y="280" />
        <di:waypoint x="1205" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f3d" bpmnElement="f3" color:border-color="#1E40AF">
        <di:waypoint x="920" y="280" />
        <di:waypoint x="970" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="f2d" bpmnElement="f2" color:border-color="#1E40AF">
        <di:waypoint x="660" y="280" />
        <di:waypoint x="720" y="280" />
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
        gap: 2,
      }}
    >
      <VBox sx={{ gap: 4 }}>
        <HBox gap={1} sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <VBox sx={{ maxWidth: 800 }}>
            <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
              Der Antrag
            </Typography>
            <BenefitPageMarkdownElement content={benefitPageData?.brief} />
          </VBox>
        </HBox>
        {
          open && (
            <>
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
                      Notwendige Dokumente
                    </Typography>
                    <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                      Diese Dokumente werden in der Regel für die Antragstellung benötigt. Je nach Situation können einzelne Dokumente entfallen oder hinzukommen.
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
                      <FormControlLabel control={<Checkbox />} label="Longer text: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                      <FormControlLabel control={<Checkbox />} label="Longer text: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                      <FormControlLabel control={<Checkbox />} label="Longer text: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                      <FormControlLabel control={<Checkbox />} label="Longer text: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                    </FormGroup>
                  </VBox>
                </VBox>
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
                <VBox sx={{ gap: 2 }}>
                  <VBox sx={{ maxWidth: 800 }}>
                    <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word", color: 'pink.main' }}>
                      Antragsprozess
                    </Typography>
                    <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                      Der folgende Prozess zeigt die typischen Schritte, die bei der Beantragung durchlaufen werden.
                      Je nach Vorteil können einzelne Schritte entfallen oder hinzukommen.
                    </Typography>
                  </VBox>
                  <BpmnViewer xml={xml} />
                </VBox>
              </VBox>
            </>
          )
        }
        <RegularButton
          onClick={() => setOpen(!open)}
          variant={'blackOutlined'}
          text={'app.browseAll.learnMoreBtn'}
          size={'small'}
        />
      </VBox>
    </VBox>
  );
};

export default BenefitPageApplication;