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
import GoogleLogout from "./google/GoogleLogout";
import Cookies from "universal-cookie";

interface IProps {
    setLoggedIn: Function
}
export const UserLoggedIn: React.FC<IProps> = (props) => {
  const cookie = new Cookies();
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={cookie.get("image")} className="circular" />
            </IonThumbnail>
            <IonLabel>{cookie.get("name")}</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <GoogleLogout setLoggedIn ={props.setLoggedIn}/>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
