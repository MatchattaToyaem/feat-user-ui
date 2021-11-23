import { IonItemOption, IonLabel, IonSegment, IonSegmentButton, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useState } from "react";
import { LEFT , RIGHT} from "../config/Constance";


interface IProps {
  selector: Function;
  selected: string;
}
export const SegmentControled: React.FC<IProps> = (props) => {
  return (
    <IonSegment
      value={props.selected}
      onIonChange={(e) => {
        if (e.detail.value) {
          props.selector(e.detail.value);
        }
      }}
    >
      <IonSegmentButton value={LEFT}>
        <IonLabel>Left foot</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value={RIGHT}>
        <IonLabel>Right foot</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};
