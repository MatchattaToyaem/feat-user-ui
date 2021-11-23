import { IonActionSheet } from "@ionic/react";
import { camera, createOutline, close } from "ionicons/icons";
import React from "react";
import { TakeImage } from "../utils/TakePhoto";

interface IProps {
  setShowActionSheet: Function;
  setMarkPoints: Function;
  takeImageHandler: Function;
  showActionSheet: boolean
}
export const ActionSheet: React.FC<IProps> = (props) => {
  return (
    <IonActionSheet
      isOpen={props.showActionSheet}
      onDidDismiss={() => props.setShowActionSheet(false)}
      cssClass="my-custom-class"
      buttons={[
        {
          text: "Take a photo",
          handler: async () => {
            await TakeImage("perspective").then((result) => {
              props.takeImageHandler(result)
            });
          },
        },
        {
          text: "Mark point",
          handler: () => {
            props.setMarkPoints(true);
            props.setShowActionSheet(false)
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ]}
    ></IonActionSheet>
  );
};
