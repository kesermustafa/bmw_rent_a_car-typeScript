import React, {useState} from 'react';
import {CarType} from "../../types.ts";
import Info from "./Info.tsx";
import {motion} from "framer-motion";
import Button from "../button";
import Modal from "../modal/Modal.tsx";
import generateImage from "../../utils/generateImage.ts";


type Props = {
	car: CarType;
}

const Card = ({car}: Props) => {
	
	const [isOpen, setIsOpen] = useState<boolean> (false)
	
	const handleOpen = () => {
		setIsOpen (true)
		document.body.style.overflow = "hidden"
	}
	
	const handleClose = () => {
		setIsOpen (false)
		document.body.style.overflow = "auto"
	}
	
	return (
		<motion.div
			initial={{scale: 0.5, opacity: 0}}
			whileInView={{scale: 1, opacity: 1}}
			transition={{duration: 0.5}}
			className='car-card group'>
			
			<h2 className='car-card__content-title'>{car.make} {car.model}</h2>
			
			<div className='flex mt-6 italic text-[19px]'>
				<span className='font-semibold text-blue-900'>₺</span>
				<span className='text-[32px] font-semibold text-amber-700 '>
					{Math.round (Math.random () * 7000 + 1500)}
				</span>
				<span className='font-semibold self-end text-blue-900'>/gün</span>
			</div>
			
			<div>
				<motion.img
					initial={{
						scale: 0.3,
						opacity: 0.3,
					}}
					
					transition={{duration: 0.7}}
					whileInView={{
						scale: 1,
						opacity: 1,
					}}
					
					src={generateImage (car)} alt={car.make + car.model} className="w-full h-full object-contain"/>
			</div>
			
			<div className='w-full transition'>
				<div className='group-hover:hidden transition'>
					<Info car={car}/>
				</div>
				
				<div className='mt-[4px] hidden group-hover:flex transition'>
					<Button
						handleClick={handleOpen}
						designs="w-full py-[25px] text-white font-semibold"
						title="Daha Fazla"
						icon="right-arrow.svg"
					/>
				</div>
			
			</div>
			
			
			<Modal car={car} isOpen={isOpen} close={handleClose}/>
		
		</motion.div>
	);
};

export default Card;
