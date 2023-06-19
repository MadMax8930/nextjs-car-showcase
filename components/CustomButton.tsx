"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, additionalStyles, action }: CustomButtonProps) => {
  return (
    <button 
      disabled={false}
      type={"button"}
      className={`custom-btn ${additionalStyles}`}
      onClick={action}
    >
      <span className={`flex-1`}>
         {title}
      </span>
    </button>
  )
}

export default CustomButton;