import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonModal,
  IonButton,
  IonImg,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { techsDetail } from "../config/Constance";
import { FootComponentDetail } from "../components/FootComponentDetail";
interface GuidlineDetailProps
  extends RouteComponentProps<{
    name: string;
  }> {}

const GuidlineDetail: React.FC<GuidlineDetailProps> = ({ match }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const tech = techsDetail.find(
    (techDetail) => techDetail.title === match.params.name
  );

  const selectComponent = (image: string) =>{
    setImage(image)
    setShowModal(true)
  }
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/feat/guidline" />
          </IonButtons>
          <IonTitle>{match.params.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        {
          tech?.title !== "Foot component" ? <p>{tech?.description}</p> : <FootComponentDetail selectComponent= {selectComponent}/>
        }
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <IonImg src = {image} style ={{height: "90%"}}/>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default GuidlineDetail;
