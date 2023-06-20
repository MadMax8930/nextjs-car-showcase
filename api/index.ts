export const fetchCars = async () => {

   const headers = {
      'X-RapidAPI-Key': 'e63c9011cdmshb275bdd29b3dce1p1c9099jsn2a548a1316f1',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
   }

   const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { 
      headers: headers
   });
   const result = await response.json();
   return result;
}