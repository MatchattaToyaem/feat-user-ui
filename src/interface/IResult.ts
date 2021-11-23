import { ICoordinate } from "./ICoordinate";

export interface IResult{
    _id: string,
    email: string,
    gender: string,
    footLength: number,
    leftFootComponent: IComponent,
    rightFootComponent: IComponent,
    leftFoot: IFoot,
    rightFoot: IFoot
}

interface IComponent{
    apex1: ICoordinate,
    apex5: ICoordinate,
    fore: ICoordinate,
    middle: ICoordinate,
    heel: ICoordinate,
    ankleSprain: ICoordinate
}

interface IFoot{
    foreWidth: number,
    middleWidth: number,
    heelWidth: number,
    apex1ToApex5: number,
    heelToForeLength: number,
    heelToMiddleLength: number,
    archHeight: number,
    archIndex: number,
    heelToApex5: number,
    SI: number,
    CSI: number,
    footType: string,
    soleImage: string,
    sideImage: string,
}