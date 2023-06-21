import { MouseEventHandler } from "react";

export interface CustomButtonProps {
   title: string;
   btnType?: "button" | "submit";
   additionalStyles?: string;
   textStyles?: string;
   rightIcon?: string;
   isDisabled?: boolean;
   action?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
   brand: string;
   setBrand: (brand: string) => void;
}

export interface CarProps {
   city_mpg: number;
   class: string;
   combination_mpg: number;
   cylinders: number;
   displacement: number;
   drive: string;
   fuel_type: string;
   highway_mpg: number;
   make: string;
   model: string;
   transmission: string;
   year: number;
}

export interface FilterProps {
   make?: string;
   year?: number;
   fuel?: string;
   model?: string;
   limit?: number;
 }