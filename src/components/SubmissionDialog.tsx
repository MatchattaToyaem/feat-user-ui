import { IonActionSheet, IonAlert } from "@ionic/react";
import { camera, createOutline, close } from "ionicons/icons";
import React from "react";
import { TakeImage } from "../utils/TakePhoto";

interface IProps {
  showAlert: boolean,
  setShowAlert: Function,
  message: string
}
export const SubmissionDialog: React.FC<IProps> = (props) => {
  return (
    <IonAlert
          isOpen={props.showAlert}
          onDidDismiss={() => props.setShowAlert(false)}
          header={'Submission'}
          message={props.message}
          buttons={['OK']}
        />
  );
};
