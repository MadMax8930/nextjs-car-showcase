"use client";

import { useState } from "react";
import { SearchManufacturer } from "@/components";

const Searchbar = () => {
   const [brand, setBrand] = useState('');
   const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
         {/* Combo Box */}
         <SearchManufacturer brand={brand} setBrand={setBrand} />

      </div>
    </form>
  )
}

export default Searchbar;