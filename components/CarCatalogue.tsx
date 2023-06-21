import { fetchCars } from "@/api";
import { Searchbar, CustomFilter, CarCard } from "@/components";

const CarCatalogue = async () => {
   const allCars = await fetchCars();
   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
   console.log(allCars);

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
      {/* Go over the car data */}
      {!isDataEmpty ? (
         <section>
            <div className="home__cars-wrapper">
               {allCars?.map((car, index) => <CarCard key={index} car={car} />)}
            </div>
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