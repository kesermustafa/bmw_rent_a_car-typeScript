import React from 'react';
import {Link} from "react-router-dom";

const Undefined = () => {
	return (
		<div className='h-screen flex flex-col items-center justify-center gap-5 bg-gray-400'>
			<h1 className="text-5xl font-serif font-bold text-red-600">404</h1>
			
			<h2 className='text-2xl'>Aradiginiz sayfa bulunamadi</h2>
			
			<p>
				<Link to={'/'} className='text-blue-700 text-xl font-bold'>Anasayfa</Link>'ya bir goz atin
			</p>
		</div>
	);
};

export default Undefined;
