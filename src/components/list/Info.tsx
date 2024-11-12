import React from 'react';
import {CarType} from "../../types.ts";
import {motion} from "framer-motion";



type Props = {
	car:CarType;
}

const Field = ({img, text}  : {img:string; text:string})=>{
	return (
		<motion.div
			initial={{
				translateY:50,
				opacity:0.3,
			}}
			
			whileInView={{
				translateY:0,
				opacity:1,
			}}
			
			className='flex-center flex-col'>
			<img src={img} width={25} alt="icon"/>
			<p className='capitalize'>{text}</p>
		</motion.div>
	)
}

const Info = ({car}: Props) => {
	
	const transmission = car.transmission === "a" ? "Otomatik" : "Manuel"
	
	const drive = car.drive === "fwd"
		? "Onden Ceker"
		: car.drive === "rwd"
			? "Arkadan itisli"
			: car.drive === "awd"
				? "4 Ceker"
				: "4 Ceker (surekli)";
	
	
	return (
		<div className='w-full flex justify-between'>
			<Field img={"/steering-wheel.svg"} text={transmission}/>
			<Field img={"/tire.svg"} text={drive}/>
			<Field img={"/gas.svg"} text={car.fuel_type}/>
		</div>
	);
};

export default Info;
