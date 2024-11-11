import React from 'react';
import {CarType} from "../../types.ts";

type Props = {
	car:CarType
}


const Images = ({car}:Props) => {
	return (
		<div className='flex flex-col gap-3'>
			
			<div className='w-full h-40 bg-pattern bg-center rounded-lg'>
				<img className='h-full mx-auto object-contain' src="/hero.png" alt=""/>
			</div>
			
			<div className='flex gap-3 my-3'>
				<div className='rounded flex-1 flex relative h-24 bg-primary-blue-100'>
					<img className='mx-auto object-contain min-w-[146px] ' src="/hero.png" alt=""/>
				</div>
				
				<div className='rounded flex-1 flex relative h-24 bg-primary-blue-100 '>
					<img className='mx-auto object-contain min-w-[146px] ' src="/hero.png" alt=""/>
				</div>
				
				<div className='rounded flex-1 flex relative h-24 bg-primary-blue-100 '>
					<img className='mx-auto object-contain min-w-[146px] ' src="/hero.png" alt=""/>
				</div>
			</div>
		
		</div>
	);
};

export default Images;
