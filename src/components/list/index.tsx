import React, {useEffect, useState} from 'react';
import {fetchCars} from "../../utils/fetchCars.ts";
import {CarType} from "../../types.ts";
import Warning from "./Warning.tsx";
import Card from "./Card.tsx";


const List = () => {
	
	const [cars, setCars] = useState<CarType[] | null> (null);
	const [isError, setIsError] = useState<boolean> (false);
	
	
	useEffect (() => {
		
		fetchCars ()
			.then ((data) => setCars (data))
			.catch ((error) => setIsError (true));
	}, []);
	
	
	return (
		<div className='padding-x max-width'>
			{!cars
				? <Warning>Loading...</Warning>
				: isError
					? <Warning>Bir Hata Olustu</Warning>
					: cars.length < 1
						? <Warning>Aranilan kriterde arac bulunamadi! </Warning>
						: cars.length > 0
						&& <section>
                            <div className="home__cars-wrapper">
								{cars.map ((car, i) => <Card key={i} car={car} />)}
                            </div>
                        </section>}
		</div>
	);
};

export default List;
