"use client";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "../components";

const Navbar = () => {
   const AuthUser = () => {}

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
         <Link href={"/"} className="flex justify-center items-center">
            <Image src="/logo.svg" alt="logo" width={120} height={20} className="object-contain" />
         </Link>
         <CustomButton 
            title="Sign In" 
            btnType="button" 
            additionalStyles="bg-primary-blue-100 text-primary-blue rounded-full min-w-[130px]" 
            action={AuthUser}
         />
      </nav>
    </header>
  )
}

export default Navbar;