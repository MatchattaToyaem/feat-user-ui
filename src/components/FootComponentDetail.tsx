import { IonItem, IonLabel, IonList } from "@ionic/react";
import apex1 from "../media/apex1.png"
import apex5 from "../media/apex5.png"
import fore from "../media/fore.png"
import middle from "../media/middle.png"
import heel from "../media/heel.png"
import ankle from "../media/ankleSprain.png"
import React from "react";

interface IProps{
    selectComponent: Function
}
export const FootComponentDetail :React.FC<IProps> = (props) =>{
    return (
    <IonList>
        <IonItem onClick = {() => props.selectComponent(apex1)}>
            <IonLabel>Apex 1</IonLabel>
        </IonItem>
        <IonItem onClick = {() => props.selectComponent(apex5)}>
            <IonLabel>Apex 5</IonLabel>
        </IonItem>
        <IonItem onClick = {() => props.selectComponent(fore)}>
            <IonLabel>Fore foot</IonLabel>
        </IonItem>
        <IonItem onClick = {() => props.selectComponent(middle)}> 
            <IonLabel>Middle foot</IonLabel>
        </IonItem>
        <IonItem onClick = {() => props.selectComponent(heel)}>
            <IonLabel>Foot heel</IonLabel>
        </IonItem>
        <IonItem onClick = {() => props.selectComponent(ankle)}>
            <IonLabel>Ankle Sprain</IonLabel>
        </IonItem>
    </IonList>)
}