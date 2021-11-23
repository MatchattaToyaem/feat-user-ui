import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import React from "react";
import "../css/utils.css";
import {
  checkmark,
  ellipseSharp,
  ellipsisVertical,
  informationCircleOutline,
} from "ionicons/icons";
import { Select } from "./Select";
import { SegmentControled } from "./SegmentControled";

interface IProps {
  setShowActionSheet: Function;
  selector: Function;
  selected: string;
  shoesSise: number | undefined;
  onShoesSizeChange: Function;
  gender: string | undefined;
  selectGender: Function;
  onSubmission: Function;
}

export const CreateModelImageItems: React.FC<IProps> = (props) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <SegmentControled
            selected={props.selected}
            selector={props.selector}
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel>
              <b>Gender</b>
            </IonLabel>
            <Select
              selector={props.selectGender}
              selected={props.gender}
              choics={["Male", "Female"]}
            />
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel>
              <b>Shoes size (CM)</b>
            </IonLabel>
            <IonInput
              className="ion-text-end"
              type="number"
              onIonChange={(e) => props.onShoesSizeChange(e.detail.value)}
              value={props.shoesSise}
              placeholder="Put your size"
            />
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel>
              <b>{props.selected} sole</b>
            </IonLabel>
            <IonGrid>
              <IonRow>
                <IonCol className="flex-box">
                  <IonIcon
                    onClick={() => props.setShowActionSheet(true, "sole")}
                    icon={ellipsisVertical}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel>
              <b>{props.selected} side</b>
            </IonLabel>
            <IonGrid>
              <IonRow>
                <IonCol className="flex-box">
                  <IonIcon
                    onClick={() => props.setShowActionSheet(true, "side")}
                    icon={ellipsisVertical}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonButton expand="block" class="ion-padding-horizontal" onClick = {() => {props.onSubmission()}}>
        Submit
      </IonButton>
    </IonGrid>
  );
};
