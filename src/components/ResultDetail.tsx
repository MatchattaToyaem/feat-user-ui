import React from "react";
import {
  IonLabel,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { IResult } from "../interface/IResult";

interface IProps {
  result: IResult | undefined;
}

const ResultDetail: React.FC<IProps> = (props) => {
  const [footSide, setFootSide] = React.useState("Left");
  return (
    <IonGrid style={{ height: "100%", marginLeft: "5%", marginRight: "5%"}}>
      <IonRow>
        <IonSegment
          value={footSide}
          onIonChange={(e) => {
            if (e.detail.value) {
              setFootSide(e.detail.value);
            }
          }}
        >
          <IonSegmentButton value="Left">
            <IonLabel>Left foot</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Right">
            <IonLabel>Right foot</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonRow>
      <IonRow className="title">
        <IonCol>Gender: </IonCol>
        <IonCol className="ion-text-right">
          {props.result ? props.result.gender : ""}
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>Foot length: </IonCol>
        <IonCol className="ion-text-right">
          {props.result ? props.result.footLength : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} heel to fore: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.heelToForeLength.toFixed(2)
              : props.result.rightFoot.heelToForeLength.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} heel to middle: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.heelToMiddleLength.toFixed(2)
              : props.result.rightFoot.heelToMiddleLength.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} heel to Apex5: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.heelToApex5.toFixed(2)
              : props.result.rightFoot.heelToApex5.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} fore width: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.foreWidth.toFixed(2)
              : props.result.rightFoot.foreWidth.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} middle width: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.middleWidth.toFixed(2)
              : props.result.rightFoot.middleWidth.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} heel width: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.heelWidth.toFixed(2)
              : props.result.rightFoot.heelWidth.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} Apex1 to Apex5: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.apex1ToApex5.toFixed(2)
              : props.result.rightFoot.apex1ToApex5.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
      <IonRow className="title">
        <IonCol>{footSide} arch height: </IonCol>
        <IonCol className="ion-text-right">
          {props.result
            ? footSide === "Left"
              ? props.result.leftFoot.archHeight.toFixed(2)
              : props.result.rightFoot.archHeight.toFixed(2)
            : ""} cm
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
export default ResultDetail;
