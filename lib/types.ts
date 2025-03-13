export interface CardInfo {
  type: "vertical" | "horizontal",
  imgUrl: string;
  color: string;
  text: {
    header: string,
    para?: string,
    color: string
  }
  button?: string
}
