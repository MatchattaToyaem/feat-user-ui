import { IonItemOption, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useState } from "react";

interface IProps {
  selector: Function;
  selected: string | undefined;
  choics: string[];
}
export const Select: React.FC<IProps> = (props) => {
  return (
    <IonSelect
      placeholder="Please select choice"
      value={props.selected}
      onIonChange={(e) => props.selector(e.detail.value)}
    >
      {props.choics.map((value: string) => {
        return <IonSelectOption>{value}</IonSelectOption>;
      })}
    </IonSelect>
  );
};
