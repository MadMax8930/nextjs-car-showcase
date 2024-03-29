import { fetchCars } from "@/api";
import { Hero, CarCatalogue } from "@/components"
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
   const allCars = await fetchCars({
      make: searchParams.make || '',
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || '',
      model: searchParams.model || '',
      limit: searchParams.limit || 10,
   });
   // console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue allCars={allCars} searchParams={searchParams} />
    </main>
  )
}
