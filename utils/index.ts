export const calculateCarRent = (city_mpg: number, year: number) => {
  const baseRentalPricePerDay = 50;
  const mileDrivenFactor = 0.1;
  const vehicleAgeFactor = 0.05;
  const mileageRate = city_mpg * mileDrivenFactor;
  const ageRate = (new Date().getFullYear() - year) * vehicleAgeFactor;
  const rentalRatePerDay = baseRentalPricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
