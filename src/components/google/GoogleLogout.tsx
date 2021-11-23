import { IonButton, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { logOut } from "ionicons/icons";
import React from "react";
import { useGoogleLogout } from "react-google-login";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const clientId: string =
  "14745869175-kg639d7vqdi4e6ebjnhu5s6q9pgnj0dm.apps.googleusercontent.com";

interface IProps{
  setLoggedIn: Function
}
const GoogleLogout: React.FC<IProps> = (props) => {
  const onLogoutSuccess = () => {
    props.setLoggedIn(false)
    cookie.remove("email", { path: "/" });
    alert("Aleady logged out");
    window.location.reload()
  };
  const onFailure = () => {
    console.log("Log out fail");
  };

  const { signOut } = useGoogleLogout({
    onLogoutSuccess,
    onFailure,
    clientId,
  });

  return (
    <IonButton
      onClick={signOut}
      expand="block"
      className="ion-no-padding"
      color="danger"
      style = {{height: "150%"}}
    >
      Sign out
    </IonButton>
  );
};

export default GoogleLogout;
