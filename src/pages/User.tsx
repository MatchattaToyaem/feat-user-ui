import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Component } from "react";
import Cookies from "universal-cookie";
import "./User.css";
import { UserLoggedOut } from "../components/UserLoggedOut";
import { UserLoggedIn } from "../components/UserLoggedIn";

interface IProps {}
interface IState {
  loggedIn: boolean;
}
class User extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const cookies = new Cookies();
    const initStatus = cookies.get("email") ? true : false;
    this.state = {
      loggedIn: initStatus,
    };
  }

  setLoggedIn = (loggedIn: boolean) => {
    this.setState({ loggedIn: loggedIn });
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense" className="ion-margin-bottom">
            <IonToolbar>
              <IonTitle size="large">Account</IonTitle>
            </IonToolbar>
          </IonHeader>
          {this.state.loggedIn ? (
            <UserLoggedIn setLoggedIn={this.setLoggedIn} />
          ) : (
            <UserLoggedOut setLoggedIn={this.setLoggedIn} />
          )}
        </IonContent>
      </IonPage>
    );
  }
}

export default User;
