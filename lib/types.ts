import {ReactNode} from "react";

export interface CardInfo {
  type: "vertical" | "horizontal" | "image",
  imgUrl?: string;
  color: string;
  text?: {
    header: string,
    para?: string,
    color: string
  }
  button?: string | ReactNode
}
