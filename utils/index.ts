export const calculateCarRent = (city_mpg: number, year: number) => {
  const baseRentalPricePerDay = 50;
  const mileDrivenFactor = 0.1;
  const vehicleAgeFactor = 0.05;
  const mileageRate = city_mpg * mileDrivenFactor;
  const ageRate = (new Date().getFullYear() - year) * vehicleAgeFactor;
  const rentalRatePerDay = baseRentalPricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
   const searchParams = new URLSearchParams(window.location.search);
   searchParams.set(type, value);
   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
   return newPathname;
}

export const deleteSearchParams = (type: string) => {
   const newSearchParams = new URLSearchParams(window.location.search);
   newSearchParams.delete(type.toLocaleLowerCase());
   const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
   return newPathname;
 };