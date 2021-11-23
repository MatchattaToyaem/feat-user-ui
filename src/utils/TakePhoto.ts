import { Camera, CameraResultType, CameraSource } from "@capacitor/core";
import axios from "axios";

export const TakeImage = async (type: String) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const profilePicture = await Camera.getPhoto({
        source: CameraSource.Photos,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      const base64Image = `data:image/png;base64,${profilePicture.base64String}`;
      await axios.post("http://localhost:5000/detect", {image: base64Image})
      .then((result) => {
        resolve(`data:image/png;base64,${result.data.image}`)
      }).catch((error)=>{
        console.log(error)
      })

    } catch (error) {
      reject(error);
    }
  });
};
