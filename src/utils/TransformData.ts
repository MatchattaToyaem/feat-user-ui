import { idText } from "typescript";
import { IResult } from "../interface/IResult";
import { ISideFoot } from "../interface/ISideFoot";
import { ISoleFoot } from "../interface/ISoleFoot";

export const toSummit = (_id: string, email: string, gender: string, footLength: number, soles: {soleLeft: ISoleFoot; soleRight: ISoleFoot}, sides: {sideLeft: ISideFoot; sideRight: ISideFoot}): IResult => {
    const request: IResult = {
        _id: _id,
        email: email,
        gender: gender,
        footLength: footLength,
        leftFootComponent: {
            apex1: soles.soleLeft.apex1,
            apex5: soles.soleLeft.apex5,
            fore: soles.soleLeft.fore,
            middle: soles.soleLeft.middle,
            heel: soles.soleLeft.heel,
            ankleSprain: sides.sideLeft.ankleSprain,
        },
        rightFootComponent: {
            apex1: soles.soleRight.apex1,
            apex5: soles.soleRight.apex5,
            fore: soles.soleRight.fore,
            middle: soles.soleRight.middle,
            heel: soles.soleRight.heel,
            ankleSprain: sides.sideRight.ankleSprain,
        },
        leftFoot:{
            foreWidth: 0,
            middleWidth: 0,
            heelWidth: 0,
            apex1ToApex5: 0,
            heelToForeLength: 0,
            heelToMiddleLength: 0,
            archHeight: 0,
            archIndex: 0,
            heelToApex5: 0,
            SI: 0,
            CSI: 0,
            footType: "",
            soleImage: soles.soleLeft.image,
            sideImage: sides.sideLeft.image,
        },
        rightFoot:{
            foreWidth: 0,
            middleWidth: 0,
            heelWidth: 0,
            apex1ToApex5: 0,
            heelToForeLength: 0,
            heelToMiddleLength: 0,
            archHeight: 0,
            archIndex: 0,
            heelToApex5: 0,
            SI: 0,
            CSI: 0,
            footType: "",
            soleImage: soles.soleRight.image,
            sideImage: sides.sideRight.image,
        }
    }

    return request
}

export const toRetrieve = (resposne: IResult): {_id: string, email: string, gender: string, footLength: number, soles: {soleLeft: ISoleFoot; soleRight: ISoleFoot}, sides: {sideLeft: ISideFoot; sideRight: ISideFoot}} => {
    const transformedResponse: {_id: string, email: string, gender: string, footLength: number, soles: {soleLeft: ISoleFoot; soleRight: ISoleFoot}, sides: {sideLeft: ISideFoot; sideRight: ISideFoot}} = 
    {
        _id : resposne._id,
        email : resposne.email,
        gender : resposne.gender,
        footLength : resposne.footLength,
        soles : {
            soleLeft : {
                apex1: resposne.leftFootComponent.apex1,
                apex5: resposne.leftFootComponent.apex5,
                fore: resposne.leftFootComponent.fore,
                middle: resposne.leftFootComponent.middle,
                heel: resposne.leftFootComponent.heel,
                image: resposne.leftFoot.soleImage,
            },
            soleRight : {
                apex1: resposne.rightFootComponent.apex1,
                apex5: resposne.rightFootComponent.apex5,
                fore: resposne.rightFootComponent.fore,
                middle: resposne.rightFootComponent.middle,
                heel: resposne.rightFootComponent.heel,
                image: resposne.rightFoot.soleImage,
            }
        },
        sides : {
            sideLeft: {
                ankleSprain : resposne.leftFootComponent.ankleSprain,
                image : resposne.leftFoot.sideImage
            },
            sideRight: {
                ankleSprain : resposne.rightFootComponent.ankleSprain,
                image : resposne.rightFoot.sideImage
            }
        }
    }

    return transformedResponse
}