import { IonActionSheet, IonAlert } from "@ionic/react";
import { camera, createOutline, close } from "ionicons/icons";
import React from "react";
import { TakeImage } from "../utils/TakePhoto";

interface IProps {
  showAlert: boolean,
  setShowAlert: Function,
  allComponents: string[],
  markedComponents: string[]
}
export const AlertDialog: React.FC<IProps> = (props) => {
    const remainingComponents : string[] = props.allComponents.filter((component)=>{
        return !props.markedComponents.includes(component)
    })
  return (
    <IonAlert
          isOpen={props.showAlert}
          onDidDismiss={() => props.setShowAlert(false)}
          header={'Alert'}
          subHeader={'Please mark all of these components'}
          message={remainingComponents.toString()}
          buttons={['OK']}
        />
  );
};
