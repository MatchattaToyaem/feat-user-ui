import React from "react";
import { ICoordinate } from "../interface/ICoordinate";
import { CreateModelImageItems } from "./CreateModelImageItems";
import { CreateModelMarkPoints } from "./CreateModelMarkPoints";

interface IProps {
  isMarkPoint: boolean;
  setShowActionSheet: Function;
  setShowMarkPoints: Function;
  selector: Function;
  setComponent: Function;
  componentMarkerPosition: ICoordinate;
  markPointHandler: Function;
  choices: string[];
  component: string;
  selected: string;
  image: string;
  shoesSize: number | undefined;
  onShoesSizeChange: Function;
  soleMarkedComponent: string[];
  sideMarkedComponent: string[];
  footComponent: string;
  gender: string | undefined;
  selectGender: Function;
  onSubmission: Function;
}
export const CreateModelBox: React.FC<IProps> = (props) => {
  if (props.isMarkPoint) {
    return (
      <CreateModelMarkPoints
        footComponent={props.footComponent}
        soleMarkedComponent={props.soleMarkedComponent}
        sideMarkedComponent={props.sideMarkedComponent}
        choices={props.choices}
        component={props.component}
        componentMarkerPosition={props.componentMarkerPosition}
        setComponent={props.setComponent}
        markPointHandler={props.markPointHandler}
        setShowMarkPoints={props.setShowMarkPoints}
        image={props.image}
      />
    );
  } else {
    return (
      <CreateModelImageItems
        onSubmission = {props.onSubmission}
        gender={props.gender}
        selectGender={props.selectGender}
        shoesSise={props.shoesSize}
        onShoesSizeChange={props.onShoesSizeChange}
        setShowActionSheet={props.setShowActionSheet}
        selector={props.selector}
        selected={props.selected}
      />
    );
  }
};
