import { camera } from "ionicons/icons";
import foot from "../media/foot.svg"
import studio from "../media/studio.svg"

export const LEFT = "Left"
export const RIGHT = "Right"
export const SUCCESS = "Success"
export const FAILED = "Got an error from serverside"
export const PROCESSING = "Processing"
export const TIMEOUT = "Connection time out"
export const techsDetail = [
  {
    title: "Foot component",
    icon: foot,
  },
  {
    title: "Set up room",
    icon: studio,
    description:
      "You have to darken the room.",
    color: "#0CA9EA",
  },
  {
    title: "Set up camera",
    icon: camera,
    description: "Turn on flash when take a picture, and when take a picture, make your phone be parallel with foot",
    color: "#F46529",
  },
];
