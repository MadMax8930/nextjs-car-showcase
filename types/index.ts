import { MouseEventHandler } from "react";

export interface CustomButtonProps {
   title: string;
   additionalStyles?: string;
   action?: MouseEventHandler<HTMLButtonElement>;
}