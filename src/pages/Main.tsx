import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { triangle, ellipse, square, informationCircleOutline, pulseOutline, listCircleOutline, atCircleOutline, personCircleOutline, createOutline } from "ionicons/icons";
import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router";
import Guidline from "./Guidline";
import CreateModel from "./CreateModel";
import Results from "./Results";
import GuidlineDetail from "./GuidlineDetail";
import User from "./User";

const Main: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path={`${match.url}/guidline`}>
              <Guidline />
            </Route>
            <Route exact path={`${match.url}/model`}>
              <CreateModel />
            </Route>
            <Route
                exact
                path={`${match.url}/guidline/:name`}
                component={GuidlineDetail}
              />
            <Route path={`${match.url}/results`}>
              <Results />
            </Route>
            <Route path={`${match.url}/account`}>
              <User/>
            </Route>
            <Route exact path={`${match.url}`}>
              <Redirect to={`${match.url}/guidline`} />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="guidline" href={`${match.url}/guidline`}>
              <IonIcon icon={informationCircleOutline} />
              <IonLabel>Guidline</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Create model" href={`${match.url}/model`}>
              <IonIcon icon={createOutline} />
              <IonLabel>Create model</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Results" href={`${match.url}/results`}>
              <IonIcon icon={listCircleOutline} />
              <IonLabel>Results</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Account" href={`${match.url}/account`}>
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Main;
