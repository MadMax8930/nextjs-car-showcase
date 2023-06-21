import { FilterProps, CarProps } from "@/types";

// API #1
export const fetchCars = async (filters: FilterProps) => {
   const { make, year, model, fuel, limit } = filters;
   const headers = {
      'X-RapidAPI-Key': `${process.env.NEXT_APP_RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
   }

   const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { 
      headers: headers
   });
   const result = await response.json();
   return result;
}

// API #2
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
   const url = new URL("https://cdn.imagin.studio/getimage");
   const { make, model, year } = car;
 
   url.searchParams.append('customer', `${process.env.NEXT_PUBLIC_IMAGIN_API_KEY}` || '');
   url.searchParams.append('make', make);
   url.searchParams.append('modelFamily', model.split(" ")[0]);
   url.searchParams.append('zoomType', 'fullscreen');
   url.searchParams.append('modelYear', `${year}`);
   url.searchParams.append('angle', `${angle}`);
   return `${url}`;
}; 