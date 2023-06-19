import { MouseEventHandler } from "react";

export interface CustomButtonProps {
   title: string;
   btnType?: "button" | "submit";
   additionalStyles?: string;
   action?: MouseEventHandler<HTMLButtonElement>;
}