"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchManufacturer } from "@/components";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
   <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image 
         src="/magnifying-glass.svg" alt="magnifying glass"
         width={40} height={40} className="object-contain"
      />
   </button>
)

const Searchbar = () => {
   const [brand, setBrand] = useState('');
   const [model, setModel] = useState('');
   const router = useRouter();

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (brand === '' && model === '') {
         return alert('Please fill in the search bar');
      }

      updateSearchParams(brand.toLowerCase(), model.toLowerCase());
   }

   const updateSearchParams = (brand: string, model: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if (brand) {
         searchParams.set('make', brand)
      } else {
         searchParams.delete('make')
      }

      if (model) {
         searchParams.set('model', model)
      } else {
         searchParams.delete('model')
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
      router.push(newPathname);
   }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
         {/* Brand Search */}
         <SearchManufacturer brand={brand} setBrand={setBrand} />
         <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
         {/* Model Search */}
         <Image 
            src="/model-icon.png" alt="car model"
            width={25} height={25} className="absolute w-[20px] h-[20px] ml-4"
         />
         <input 
            type="text" name="model"
            value={model} onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan" className="searchbar__input"
         />
         <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default Searchbar;