import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonProgressBar,
  IonRow,
  IonSelect,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import "../css/utils.css";
import useDimension from "../utils/useDimension";
import { Select } from "./Select";
import { ICoordinate } from "../interface/ICoordinate";
import {
  checkmarkCircleOutline,
  informationCircleOutline,
} from "ionicons/icons";
import { AlertDialog } from "./AlertDialog";

interface IProps {
  setShowMarkPoints: Function;
  markPointHandler: Function;
  componentMarkerPosition: ICoordinate;
  setComponent: Function;
  choices: string[];
  component: string;
  image: string;
  soleMarkedComponent: string[];
  sideMarkedComponent: string[];
  footComponent: string;
}
export const CreateModelMarkPoints: React.FC<IProps> = (props) => {
  const divRef = useRef(null);
  const { height, width } = useDimension(divRef);
  const image = new Image();
  if (props.image) {
    image.src = props.image;
  }
  console.log(image.width);
  const imageLanscapeScaleRatio = width / image.width;
  const imagePortraitScaleRatio = height / image.height;
  const imageScaleRatio: number =
    image.width > image.height
      ? imageLanscapeScaleRatio
      : imagePortraitScaleRatio;

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const setShowAlertFunction = (showAlert: boolean) => {
    setShowAlert(showAlert);
  };
  return (
    <>
      <IonGrid className="box">
        <IonRow>
          <IonCol className="ion-padding">
            <IonProgressBar
              value={
                props.footComponent === "sole"
                  ? props.soleMarkedComponent.length / 5
                  : props.sideMarkedComponent.length
              }
              color={
                (props.footComponent === "sole"
                  ? props.soleMarkedComponent.length / 5
                  : props.sideMarkedComponent.length) === 1
                  ? "success"
                  : "primary"
              }
            />
          </IonCol>
          <IonCol size="1">
            {(props.footComponent === "sole"
              ? props.soleMarkedComponent.length / 5
              : props.sideMarkedComponent.length) === 1 ? (
              <IonIcon icon={checkmarkCircleOutline} color="success" />
            ) : (
              <IonIcon
                icon={informationCircleOutline}
                onClick={() => setShowAlertFunction(true)}
              />
            )}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Foot component</IonLabel>
              <Select
                selector={props.setComponent}
                selected={props.component}
                choics={props.choices}
              />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow className="row content">
          <IonCol
            className="box ion-no-padding"
            ref={divRef}
            style={{ height: "100%" }}
          >
            <Canvas
              height={height}
              width={width}
              image={image}
              component={props.component}
              imageScaleRatio={imageScaleRatio}
              onClick={props.markPointHandler}
              componentMarkerPosition={props.componentMarkerPosition}
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton
              expand="block"
              onClick={() => props.setShowMarkPoints(false)}
            >
              Back
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      <AlertDialog
        showAlert={showAlert}
        setShowAlert={setShowAlertFunction}
        allComponents={
          props.footComponent === "sole"
            ? ["apex1", "apex5", "fore", "middle", "heel"]
            : ["ankleSprain"]
        }
        markedComponents={
          props.footComponent === "sole"
            ? props.soleMarkedComponent
            : props.sideMarkedComponent
        }
      />
    </>
  );
};
