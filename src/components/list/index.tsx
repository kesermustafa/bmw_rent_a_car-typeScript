import React, {useEffect, useState} from 'react';
import {fetchCars} from "../../utils/fetchCars.ts";
import {CarType} from "../../types.ts";
import Warning from "./Warning.tsx";
import Card from "./Card.tsx";
import Button from "../button";
import {useSearchParams} from "react-router-dom";


const List = () => {
	
	const [cars, setCars] = useState<CarType[] | null> (null);
	const [isError, setIsError] = useState<boolean> (false);
	
	const [limit, setLimit] = useState<number> (5)
	
	const [params] = useSearchParams();
	
	const paramsObj = Object.fromEntries(params.entries());
	
	useEffect (() => {
		setLimit(5)
	}, [params.get("make"), params.get("model")]);
	
	useEffect (() => {
		
		fetchCars ({limit, ...paramsObj})
			.then ((data) => setCars (data))
			.catch ((error) => setIsError (true));
	}, [limit, params]);
	
	
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
                            <div className="home__cars-wrapper op">
								{cars.map ((car, i) => <Card key={i} car={car} />)}
                            </div>
							
							<div className='w-full flex-center py-10'>
								{ limit<30 &&
                                <Button
                                    handleClick={() => setLimit(limit + 5) }
                                    title={"Devamini Yukle"}/>
								}
							</div>
							
                        </section>}
		</div>
	);
};

export default List;
