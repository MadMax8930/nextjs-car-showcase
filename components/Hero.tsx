"use client";

import Image from "next/image";
import { CustomButton } from "../components";

const Hero = () => {
   const handleScroll = () => {}

  return (
    <div className="hero">
      {/* Typography */}
      <div className="flex-1 pt-36 px-16">
         <h1 className="hero__title">
            Find, book or rent a car — quickly and easily.
         </h1>
         <p className="hero__subtitle">
            Streamline your car rental experience with out effortless booking process.
         </p>
         <CustomButton 
            title="Explore Cars"
            additionalStyles="bg-primary-blue text-white rounded-full mt-10"
            action={handleScroll}
         />
      </div>
      {/* Car Picture */}
      <div className="hero__image-container">
         <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
            <div className="hero__image-overlay" />
         </div>
      </div>
    </div>
  )
}

export default Hero;