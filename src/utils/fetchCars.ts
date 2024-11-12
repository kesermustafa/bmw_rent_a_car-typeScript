import {CarType} from "../types.ts";

const options = {
	headers: {
		'x-rapidapi-key': '04131e1bf2msh58dd9437974cb20p1519a1jsnae63d07dc2a8',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
}

type Parameters = {
	limit:number;
	make?:string;
	model?:string;
	fuel_type?:string;
	year?:string;
}


export const fetchCars =
	async ({limit, make="Land Rover", model='', year='', fuel_type=''}:Parameters):Promise<CarType[]> => {

	try {
		const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;
		
		const res = await fetch(url, options);
		const data = await res.json();
		return data;
	}catch(err) {
		throw new Error("Veri alinirken sorun olustu");
	}

};