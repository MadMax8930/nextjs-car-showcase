"use client";

import Image from "next/image";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { carBrands } from "@/constants";

const SearchManufacturer = ({ brand, setBrand }: SearchManufacturerProps) => {
   const [searchQuery, setSearchQuery] = useState('');
   const filteredBrands = searchQuery === "" 
         ? carBrands 
         : carBrands.filter((item: string) => item.toLowerCase().replace(/\s+/g, "").includes(searchQuery.toLowerCase().replace(/\s+/g, "")));

  return (
    <div className="search-manufacturer">
      {/* Pass the Searchbar state to the Combobox */}
      <Combobox value={brand} onChange={setBrand}>
         <div className="relative w-full">
            {/* Button */}
            <Combobox.Button className="absolute top-[14px]">
               <Image 
                  src="/car-logo.svg" alt="Car Logo"
                  width={20} height={20} className="ml-4"
               />
            </Combobox.Button>
            {/* Input */}
            <Combobox.Input 
               className="search-manufacturer__input"
               placeholder="Volkswagen"
               displayValue={(brand: string) => brand}
               onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Options */}
            <Transition 
               as={Fragment}
               leave="transition ease-in duration-100"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
               afterLeave={() => setSearchQuery('')}
            >
               <Combobox.Options>
                  {filteredBrands.map((item: string) => (
                     <Combobox.Option 
                        key={item} 
                        value={item}
                        className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                     >
                        {({selected}) => (
                           <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {item}
                           </span>
                        )}
                     </Combobox.Option>
                  ))}
               </Combobox.Options>
            </Transition>
         </div>
      </Combobox>
    </div>
  )
}
;
export default SearchManufacturer