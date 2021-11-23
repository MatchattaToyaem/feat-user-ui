# feat-user-ui
## Project structure
* [components/](./src/components)
  * [google/](./src/components/google)
    * [GoogleLogin.tsx](./src/components/google/GoogleLogin.tsx)
    * [GoogleLogout.tsx](./src/components/google/GoogleLogout.tsx)
    * [RefreshToken.tsx](./src/components/google/RefreshToken.tsx)
  * [ActionSheet.tsx](./src/components/ActionSheet.tsx)
  * [AlertDialog.tsx](./src/components/AlertDialog.tsx)
  * [Canvas.tsx](./src/components/Canvas.tsx)
  * [CreateModelBox.tsx](./src/components/CreateModelBox.tsx)
  * [CreateModelImageItems.tsx](./src/components/CreateModelImageItems.tsx)
  * [CreateModelMarkPoints.tsx](./src/components/CreateModelMarkPoints.tsx)
  * [ExploreContainer.css](./src/components/ExploreContainer.css)
  * [ExploreContainer.tsx](./src/components/ExploreContainer.tsx)
  * [FootComponentDetail.tsx](./src/components/FootComponentDetail.tsx)
  * [GuidlineNavigation.tsx](./src/components/GuidlineNavigation.tsx)
  * [ResultDetail.tsx](./src/components/ResultDetail.tsx)
  * [SegmentControled.tsx](./src/components/SegmentControled.tsx)
  * [Select.tsx](./src/components/Select.tsx)
  * [SubmissionDialog.tsx](./src/components/SubmissionDialog.tsx)
  * [UserLoggedIn.tsx](./src/components/UserLoggedIn.tsx)
  * [UserLoggedOut.tsx](./src/components/UserLoggedOut.tsx)
* [config/](./src/config)
  * [Constance.ts](./src/config/Constance.ts)
* [css/](./src/css)
  * [utils.css](./src/css/utils.css)
* [interface/](./src/interface)
  * [ICoordinate.ts](./src/interface/ICoordinate.ts)
  * [IResult.ts](./src/interface/IResult.ts)
  * [ISideFoot.ts](./src/interface/ISideFoot.ts)
  * [ISoleFoot.ts](./src/interface/ISoleFoot.ts)
* [media/](./src/media)
  * [ankleSprain.png](./src/media/ankleSprain.png)
  * [apex1.png](./src/media/apex1.png)
  * [apex5.png](./src/media/apex5.png)
  * [camera.png](./src/media/camera.png)
  * [camera.svg](./src/media/camera.svg)
  * [foot.png](./src/media/foot.png)
  * [foot.svg](./src/media/foot.svg)
  * [fore.png](./src/media/fore.png)
  * [google.png](./src/media/google.png)
  * [google.svg](./src/media/google.svg)
  * [heel.png](./src/media/heel.png)
  * [logo.png](./src/media/logo.png)
  * [middle.png](./src/media/middle.png)
  * [search.svg](./src/media/search.svg)
  * [studio.png](./src/media/studio.png)
  * [studio.svg](./src/media/studio.svg)
* [pages/](./src/pages)
  * [CreateModel.css](./src/pages/CreateModel.css)
  * [CreateModel.tsx](./src/pages/CreateModel.tsx)
  * [Guidline.css](./src/pages/Guidline.css)
  * [Guidline.tsx](./src/pages/Guidline.tsx)
  * [GuidlineDetail.tsx](./src/pages/GuidlineDetail.tsx)
  * [Main.tsx](./src/pages/Main.tsx)
  * [Results.css](./src/pages/Results.css)
  * [Results.tsx](./src/pages/Results.tsx)
  * [User.css](./src/pages/User.css)
  * [User.tsx](./src/pages/User.tsx)
* [theme/](./src/theme)
  * [variables.css](./src/theme/variables.css)
* [utils/](./src/utils)
  * [TakePhoto.ts](./src/utils/TakePhoto.ts)
  * [TransformData.ts](./src/utils/TransformData.ts)
  * [useDimension.ts](./src/utils/useDimension.ts)
* [App.test.tsx](./src/App.test.tsx)
* [App.tsx](./src/App.tsx)
* [index.tsx](./src/index.tsx)
* [react-app-env.d.ts](./src/react-app-env.d.ts)
* [reportWebVitals.ts](./src/reportWebVitals.ts)
* [service-worker.ts](./src/service-worker.ts)
* [serviceWorkerRegistration.ts](./src/serviceWorkerRegistration.ts)
* [setupTests.ts](./src/setupTests.ts)

### App & Index
For [app file](./src/App.tsx), it used to reder the ionic application and this file was called by [index file](./src/index.tsx) for rendering the web interface.

### Pages
For the [pages directory](./src/pages), it contains all of the pages that display on website.

- [Main page](./src/pages/Main.tsx) : It is a main page which is linked to the other pages. You can start to investigate this page first, if you is the new one for this peroject.
- [Guidline page](./src/pages/Guidline.tsx) : It contains the guidline for the user.
- [Create model page](./src/pages/CreateModel.tsx) : It use to create and update model, it means that it contains taking photo process, marking point process, and gathering user information.
- [Results page](./src/pages/Results.tsx) : It used to displayed result from the back-end.
- [User page](./src/pages/User.tsx) : It used to display user prpfile image, log in, and log out.

### Components
For the [components directory](./src/components), it contains all of page components and google login and logout buttons.

### Configs
For the [configs directory](./src/config), it contains all of neccessary constants, which use to diplayed to the monitor.

### Interfaces
For the [interfaces directory](./src/interface), it contains all of the interfaces, which is used to create a request and sent to the back end server.

### Media
For the [media directory](./src/media), it contains all of the images and icons.

### Utils
For the [utils directory](./src/utils), it contains all utility functions, which is used in page component.
- [TakePhoto.ts](./src/utils/TakePhoto.ts) : It use to take a photo.(Select photo if you run on computers)
- [TransformData.ts](./src/utils/TransformData.ts) : It use to transform data between backend and fontend.
- [useDimension.ts](./src/utils/useDimension.ts) : It use to find the dimension of the containers, which is important for making point process.

## How to start this project
1. Start with docker
2. Start with out docker

### Start with docker
You can using this command in the same directory of docker-compose file.
```
docker-compose up -d
```
### Start with out docker
To run this project, it required [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/). If you use OSX you can use these command.
```
brew install node
npm install --grobal yarn
```

You can use this command to run the project.
```
yarn start
```

