import React from 'react';
import {CarType} from "../../types.ts";
import Info from "./Info.tsx";


type Props = {
	car:CarType;
}

const Card = ({car}:Props) => {
	return (
		<div className='car-card'>
			<h2 className='car-card__content-title'>{car.make} {car.model}</h2>
			
			<div className='flex mt-6 italic text-[19px]'>
				<span className='font-semibold text-blue-900'>₺</span>
				<span className='text-[32px] font-semibold text-amber-700 '>
					{Math.round(Math.random()* 7000 + 1500)}
				</span>
				<span className='font-semibold self-end text-blue-900'>/gün</span>
			</div>
			
			<div>
				<img src="/hero.png" alt="Oto image" className="w-full h-full object-contain"/>
			</div>
			
			<div className='w-full'>
				<Info car={car} />
			</div>
			
		</div>
	);
};

export default Card;
