import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
} from "@ionic/react";
import google from "../../media/google.svg";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from "react-google-login";
import Cookies from "universal-cookie";
import { RefreshToken } from "./RefreshToken";

const clientId: string =
  "14745869175-kg639d7vqdi4e6ebjnhu5s6q9pgnj0dm.apps.googleusercontent.com";

const cookie = new Cookies();

interface IProps {
  setLoggedIn: Function;
}

const GoogleLogin: React.FC<IProps> = (props) => {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    RefreshToken(res);
    props.setLoggedIn(true)
    cookie.set("name", (res as GoogleLoginResponse).profileObj.name);
    cookie.set("image", (res as GoogleLoginResponse).profileObj.imageUrl);
    cookie.set("email", (res as GoogleLoginResponse).profileObj.email, {
      path: "/",
    });
    window.location.reload()
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <IonButton
      onClick={signIn}
      expand="block"
      className="ion-no-padding"
      color="light"
      style={{ height: "150%" }}
    >
      <IonIcon icon={google} style={{ height: "100%", marginRight: "2%" }} />
      Sign in with Google
    </IonButton>
  );
};

export default GoogleLogin;
