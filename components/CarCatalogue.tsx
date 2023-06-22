import { Searchbar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";

const CarCatalogue = async ({ allCars, searchParams }) => {
   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
         </div>
      </div>
      {/* Go over the car data */}
      {!isDataEmpty ? (
         <section>
            <div className="home__cars-wrapper">
               {allCars?.map((car, index) => <CarCard key={index} car={car} />)}
            </div>
            <ShowMore />
         </section>  
      ) : (
         <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
         </div>
      )}

    </div>
  )
}

export default CarCatalogue;