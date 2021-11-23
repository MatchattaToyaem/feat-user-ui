import {
  IonActionSheet,
  IonCol,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonThumbnail,
} from "@ionic/react";
import { camera, createOutline, close } from "ionicons/icons";
import React from "react";
import { TakeImage } from "../utils/TakePhoto";
import Cookies from "universal-cookie";
import GoogleLogin from "./google/GoogleLogin";

interface IProps {
    setLoggedIn: Function
}
export const UserLoggedOut: React.FC<IProps> = (props) => {
  const cookie = new Cookies();
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <GoogleLogin setLoggedIn = {props.setLoggedIn}/>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
