import React from 'react';
import Images from "./Images.tsx";
import {CarType} from "../../types.ts";
import {motion, AnimatePresence} from 'framer-motion';

interface Props {
	car: CarType;
	isOpen: boolean;
	close: () => void;
}

const Modal = ({car, isOpen, close}: Props) => {
	
	return (
		<AnimatePresence>
			{isOpen && (
				<div className='fixed modal inset-0 bg-black bg-opacity-50 z-20 grid place-items-center backdrop-blur-sm  '>
					
					<motion.div
						
						initial={{scale: 0.5, opacity: 0}}
						animate={{scale: 1, opacity: 1}}
						transition={{duration: 0.25}}
						exit={{scale: 0.5, opacity: 0}}
						className='bg-white relative overflow-y-auto p-6 max-w-lg max-h-[95vh] rounded flex flex-col gap-4 shadow-2xl'>
						
						<button
							onClick={close}
							className='cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full'>
							<img src="/close.svg" alt=""/>
						</button>
						
						<Images car={car}/>
						
						{
							Object.entries (car).map (([key, value]) => (
								<p key={key} className='flex justify-between  border-b pb-1 '>
									<span className='capitalize'>{key.split ("_").join (" ")}</span>
									<span className='capitalize font-semibold'>{value}</span>
								</p>
							))
						}
					
					</motion.div>
				
				</div>)}
		</AnimatePresence>
	);
};

export default Modal;
