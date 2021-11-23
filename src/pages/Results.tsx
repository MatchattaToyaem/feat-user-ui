import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import React, { Component } from "react";
import Cookies from "universal-cookie";
import ExploreContainer from "../components/ExploreContainer";
import ResultDetail from "../components/ResultDetail";
import { SubmissionDialog } from "../components/SubmissionDialog";
import { FAILED, PROCESSING, SUCCESS } from "../config/Constance";
import { IResult } from "../interface/IResult";
import "./Results.css";

interface IProps {}
interface IState {
  email: string;
  result: IResult | undefined;
  submissionStatus: boolean;
  submissionMessage: string;
}
class Results extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const email = new Cookies().get("email") ? new Cookies().get("email") : "";
    this.state = {
      email: email,
      result: undefined,
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
          this.setState({
            result: data,
          });
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

  setSubmissionStatus = (status: boolean) => {
    this.setState({
      submissionStatus: status,
      submissionMessage: PROCESSING,
    });
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Result</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense" className="ion-margin-bottom">
            <IonToolbar>
              <IonTitle size="large">Result</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ResultDetail result= {this.state.result}/>
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

export default Results;
