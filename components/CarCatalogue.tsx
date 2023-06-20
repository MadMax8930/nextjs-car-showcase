import { Searchbar, CustomFilter } from "@/components";

const CarCatalogue = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      {/* Typography */}
      <div className="home__text-container">
         <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
         <p>Explore the cars you might like</p>
      </div>
      {/* Search & Filters */}
      <div className="home__filters">
         <Searchbar />
         <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
         </div>
      </div>
    </div>
  )
}

export default CarCatalogue;