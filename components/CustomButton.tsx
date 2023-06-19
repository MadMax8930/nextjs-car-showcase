"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, btnType, additionalStyles, action }: CustomButtonProps) => {
  return (
    <button 
      disabled={false}
      type={btnType || "button"}
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