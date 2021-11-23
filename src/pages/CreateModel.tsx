import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Component } from "react";
import "./CreateModel.css";
import "../css/utils.css";
import { ActionSheet } from "../components/ActionSheet";
import { CreateModelBox } from "../components/CreateModelBox";
import { ISoleFoot } from "../interface/ISoleFoot";
import { ISideFoot } from "../interface/ISideFoot";
import { ICoordinate } from "../interface/ICoordinate";
import axios from "axios";
import Cookies from "universal-cookie";
import { IResult } from "../interface/IResult";
import { toRetrieve, toSummit } from "../utils/TransformData";
import { FAILED, PROCESSING, SUCCESS } from "../config/Constance";
import { SubmissionDialog } from "../components/SubmissionDialog";
interface IProps {}
interface IState {
  _id: string;
  showActionSheet: boolean;
  showMarkPoint: boolean;
  selectedFoot: string;
  gender: string | undefined;
  soles: { soleLeft: ISoleFoot; soleRight: ISoleFoot };
  sides: { sideLeft: ISideFoot; sideRight: ISideFoot };
  footComponent: string;
  currentImage: string;
  componentPoint: string;
  componentChoices: string[];
  currentComponent: ICoordinate;
  shoesSize: number | undefined;
  soleMarkedComponent: string[];
  sideMarkedComponent: string[];
  leftSoleMarkedComponent: string[];
  leftSideMarkedComponent: string[];
  rightSoleMarkedComponent: string[];
  rightSideMarkedComponent: string[];
  email: string;
  isExisted: boolean;
  submissionMessage: string;
  submissionStatus: boolean;
}

class CreateModel extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const initialCoordinate = {
      x: 0,
      y: 0,
    };
    const email = new Cookies().get("email") ? new Cookies().get("email") : "";
    this.state = {
      _id: "",
      isExisted: false,
      gender: undefined,
      componentChoices: ["apex1", "apex5", "fore", "middle", "heel"],
      componentPoint: "apex1",
      currentComponent: initialCoordinate,
      showActionSheet: false,
      showMarkPoint: false,
      selectedFoot: "Left",
      soles: {
        soleLeft: {
          image: "",
          apex1: initialCoordinate,
          apex5: initialCoordinate,
          fore: initialCoordinate,
          middle: initialCoordinate,
          heel: initialCoordinate,
        },
        soleRight: {
          image: "",
          apex1: initialCoordinate,
          apex5: initialCoordinate,
          fore: initialCoordinate,
          middle: initialCoordinate,
          heel: initialCoordinate,
        },
      },
      sides: {
        sideLeft: {
          image: "",
          ankleSprain: initialCoordinate,
        },
        sideRight: {
          image: "",
          ankleSprain: initialCoordinate,
        },
      },
      footComponent: "sole",
      currentImage: "",
      shoesSize: undefined,
      soleMarkedComponent: [],
      sideMarkedComponent: [],
      leftSideMarkedComponent: [],
      leftSoleMarkedComponent: [],
      rightSideMarkedComponent: [],
      rightSoleMarkedComponent: [],
      email: email,
      submissionStatus: false,
      submissionMessage: PROCESSING,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/users`, {
        headers: {
          "user-email": this.state.email,
        },
      })
      .then((res) => {
        const data: IResult | undefined = res.data;
        if (data) {
          const transformedData = toRetrieve(data);
          this.setState({
            _id: transformedData._id,
            isExisted: true,
            gender: transformedData.gender,
            shoesSize: transformedData.footLength,
            soles: transformedData.soles,
            sides: transformedData.sides,
            leftSoleMarkedComponent: [
              "apex1",
              "apex5",
              "fore",
              "middle",
              "heel",
            ],
            rightSoleMarkedComponent: [
              "apex1",
              "apex5",
              "fore",
              "middle",
              "heel",
            ],
            rightSideMarkedComponent: ["ankleSprain"],
            leftSideMarkedComponent: ["ankleSprain"],
          });
          console.log(transformedData);
        }
      })
      .catch((error) => {
        this.setState({
          submissionStatus: true,
          submissionMessage: FAILED,
        });
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }

  setShowActionSheet = (status: boolean, footComponent: string) => {
    this.setState({
      showActionSheet: status,
      footComponent: footComponent ? footComponent : this.state.footComponent,
    });
  };

  setShowMarkPoints = (status: boolean) => {
    this.setState({
      showMarkPoint: status,
    });
    const choices: string[] =
      this.state.footComponent === "sole"
        ? ["apex1", "apex5", "fore", "middle", "heel"]
        : ["ankleSprain"];
    switch (this.state.footComponent) {
      case "sole":
        const soles: any = this.state.soles;
        const soleImage =
          soles[this.state.footComponent + this.state.selectedFoot].image;
        this.setState({
          currentImage: soleImage,
        });
        break;
      case "side":
        const sides: any = this.state.sides;
        const sideImage =
          sides[this.state.footComponent + this.state.selectedFoot].image;
        this.setState({
          currentImage: sideImage,
        });
    }
    if (this.state.footComponent === "side") {
      this.setState({
        currentComponent: (this.state.sides as any)[
          this.state.footComponent + this.state.selectedFoot
        ]["ankleSprain"],
        sideMarkedComponent:
          this.state.selectedFoot === "Left"
            ? this.state.leftSideMarkedComponent
            : this.state.rightSideMarkedComponent,
      });
      this.setState({ componentPoint: "ankleSprain" });
    }
    if (this.state.footComponent === "sole") {
      this.setState({
        currentComponent: (this.state.soles as any)[
          this.state.footComponent + this.state.selectedFoot
        ]["apex1"],
        soleMarkedComponent:
          this.state.selectedFoot === "Left"
            ? this.state.leftSoleMarkedComponent
            : this.state.rightSoleMarkedComponent,
      });
      this.setState({ componentPoint: "apex1" });
    }
    this.setState({ componentChoices: choices });
  };

  selectFootSide = (selected: string) => {
    this.setState({
      selectedFoot: selected,
    });
  };

  takeImageHandler = (image: string) => {
    const initialCoordinate = {
      x: 0,
      y: 0,
    };
    const sole: ISoleFoot = {
      apex1: initialCoordinate,
      apex5: initialCoordinate,
      fore: initialCoordinate,
      middle: initialCoordinate,
      heel: initialCoordinate,
      image: image,
    };
    const side: ISideFoot = {
      ankleSprain: initialCoordinate,
      image: image,
    };
    switch (this.state.footComponent) {
      case "sole":
        const soles: any = this.state.soles;
        soles[this.state.footComponent + this.state.selectedFoot] = sole;
        this.setState({
          soles: soles,
        });
        if (this.state.selectedFoot === "Left") {
          this.setState({
            leftSoleMarkedComponent: [],
          });
        } else {
          this.setState({
            rightSideMarkedComponent: [],
          });
        }
        break;
      case "side":
        const sides: any = this.state.sides;
        sides[this.state.footComponent + this.state.selectedFoot] = side;
        this.setState({
          sides: sides,
        });
        if (this.state.selectedFoot === "Left") {
          this.setState({
            rightSoleMarkedComponent: [],
          });
        } else {
          this.setState({
            rightSideMarkedComponent: [],
          });
        }
    }
  };

  markPointHandler = (
    component: string,
    coordinate: { x: number; y: number }
  ) => {
    switch (this.state.footComponent) {
      case "sole":
        const soles: any = this.state.soles;
        soles[this.state.footComponent + this.state.selectedFoot][
          component
        ] = coordinate;
        this.setState({
          soles: soles,
        });
        if (
          !this.state.soleMarkedComponent.includes(component) &&
          (this.state.soles as any)[
            this.state.footComponent + this.state.selectedFoot
          ].image
        ) {
          this.setState({
            soleMarkedComponent: [...this.state.soleMarkedComponent, component],
          });
          if (this.state.selectedFoot === "Left") {
            this.setState({
              leftSoleMarkedComponent: [
                ...this.state.leftSoleMarkedComponent,
                component,
              ],
            });
          } else {
            this.setState({
              rightSoleMarkedComponent: [
                ...this.state.rightSoleMarkedComponent,
                component,
              ],
            });
          }
        }
        break;
      case "side":
        const sides: any = this.state.sides;
        sides[this.state.footComponent + this.state.selectedFoot][
          component
        ] = coordinate;
        this.setState({
          sides: sides,
        });
        if (
          !this.state.soleMarkedComponent.includes(component) &&
          (this.state.sides as any)[
            this.state.footComponent + this.state.selectedFoot
          ].image
        ) {
          this.setState({
            sideMarkedComponent: [
              ...this.state.sideMarkedComponent,
              component,
            ],
          });
          if (this.state.selectedFoot === "Left") {
            this.setState({
              leftSideMarkedComponent: [
                ...this.state.leftSideMarkedComponent,
                component,
              ],
            });
          } else {
            this.setState({
              rightSideMarkedComponent: [
                ...this.state.rightSideMarkedComponent,
                component,
              ],
            });
          }
        }
    }
    this.setState({ currentComponent: coordinate });
  };

  onShoesSizeChange = (shoesSize: number) => {
    console.log(shoesSize)
    this.setState({ shoesSize: shoesSize });
  };

  setComponent = (component: string) => {
    switch (this.state.footComponent) {
      case "sole":
        const soles: any = this.state.soles;
        this.setState({
          currentComponent:
            soles[this.state.footComponent + this.state.selectedFoot][
              component
            ],
        });
        break;
      case "side":
        const sides: any = this.state.sides;
        this.setState({
          currentComponent:
            sides[this.state.footComponent + this.state.selectedFoot][
              component
            ],
        });
    }
    this.setState({ componentPoint: component });
  };

  selectGender = (gender: string) => {
    this.setState({
      gender: gender,
    });
  };

  setSubmissionStatus = (status: boolean) => {
    this.setState({
      submissionStatus: status,
      submissionMessage: PROCESSING,
    });
  };

  onSubmission = async () => {
    const gender = this.state.gender ? this.state.gender : "";
    const shoesSize = this.state.shoesSize ? this.state.shoesSize : 0;
    const payload = toSummit(
      this.state._id,
      this.state.email,
      gender,
      shoesSize,
      this.state.soles,
      this.state.sides
    );
    const falseCoordinate: ICoordinate = {
      x: 0,
      y:0
    }
    if (
      new Cookies().get("email") &&
      this.state.gender &&
      this.state.soles.soleLeft.apex1 !== falseCoordinate &&
      this.state.soles.soleLeft.apex5 !== falseCoordinate &&
      this.state.soles.soleLeft.fore !== falseCoordinate &&
      this.state.soles.soleLeft.middle !== falseCoordinate &&
      this.state.soles.soleLeft.heel !== falseCoordinate &&
      this.state.sides.sideLeft.ankleSprain !== falseCoordinate &&
      this.state.soles.soleLeft.apex1 !== falseCoordinate &&
      this.state.soles.soleLeft.apex5 !== falseCoordinate &&
      this.state.soles.soleLeft.fore !== falseCoordinate &&
      this.state.soles.soleLeft.middle !== falseCoordinate &&
      this.state.soles.soleLeft.heel !== falseCoordinate &&
      this.state.sides.sideRight.ankleSprain !== falseCoordinate
    ) {
      if (this.state.isExisted) {
        await axios
          .post("http://localhost:8080/users/update", payload, {
            headers: {
              "user-email": this.state.email,
            },
          })
          .then(() => {
            this.setState({
              submissionStatus: true,
              submissionMessage: SUCCESS,
            });
          })
          .catch(() => {
            this.setState({
              submissionStatus: true,
              submissionMessage: FAILED,
            });
          });
      } else {
        await axios
          .post("http://localhost:8080/users", payload, {
            headers: {
              "user-email": this.state.email,
            },
          })
          .then(() => {
            this.setState({
              submissionStatus: true,
              submissionMessage: SUCCESS,
            });
          })
          .catch(() => {
            this.setState({
              submissionStatus: true,
              submissionMessage: FAILED,
            });
          });
      }
    } else {
      this.setState({
        submissionStatus: true,
        submissionMessage:
          "You have to add sole and side images of left foot and tight foot, and mark all components",
      });
    }
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Create model</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense" className="ion-margin-bottom">
            <IonToolbar>
              <IonTitle size="large">Create model</IonTitle>
            </IonToolbar>
          </IonHeader>
          <CreateModelBox
            onSubmission={this.onSubmission}
            selectGender={this.selectGender}
            gender={this.state.gender}
            footComponent={this.state.footComponent}
            soleMarkedComponent={this.state.soleMarkedComponent}
            sideMarkedComponent={this.state.sideMarkedComponent}
            shoesSize={this.state.shoesSize}
            onShoesSizeChange={this.onShoesSizeChange}
            choices={this.state.componentChoices}
            componentMarkerPosition={this.state.currentComponent}
            setComponent={this.setComponent}
            component={this.state.componentPoint}
            markPointHandler={this.markPointHandler}
            image={this.state.currentImage}
            selected={this.state.selectedFoot}
            selector={this.selectFootSide}
            isMarkPoint={this.state.showMarkPoint}
            setShowActionSheet={this.setShowActionSheet}
            setShowMarkPoints={this.setShowMarkPoints}
          />
          <ActionSheet
            takeImageHandler={this.takeImageHandler}
            setShowActionSheet={this.setShowActionSheet}
            setMarkPoints={this.setShowMarkPoints}
            showActionSheet={this.state.showActionSheet}
          />
          <SubmissionDialog
            showAlert={this.state.submissionStatus}
            setShowAlert={this.setSubmissionStatus}
            message={this.state.submissionMessage}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default CreateModel;
