import {CarType} from "../types.ts";

const options = {
	headers: {
		'x-rapidapi-key': '04131e1bf2msh58dd9437974cb20p1519a1jsnae63d07dc2a8',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
}

export const fetchCars = async ():Promise<CarType[]> => {

	try {
		const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=BMW&model=m4`;
		
		const res = await fetch(url, options);
		const data = await res.json();
		return data;
	}catch(err) {
		throw new Error("Veri alinirken sorun olustu");
	}

};