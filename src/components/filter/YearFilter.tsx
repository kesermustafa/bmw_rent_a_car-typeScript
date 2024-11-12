import React, {FormEvent, useState} from 'react';
import {useSearchParams} from "react-router-dom";

const YearFilter = () => {
	
	const [params, setParams] = useSearchParams()
	
	const [year, setYear] = useState<string> ("")
	
	const handleSubmit = (e:FormEvent) => {
		e.preventDefault();
		
		params.set("year", year);
		
		setParams(params)
	}
	
	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-center items-center bg-gray-500 ">
			<label htmlFor="year" className='px-5 ml-2'>Year </label>
			<input id="year"
			       title='search year'
			       type="number"
					className="w-24 ml-1 py-[6px] px-2 rounded-[4px] shadow text-black"
			        placeholder="or:2023"
			        onChange={(e) => setYear(e.target.value)}
			       
			       
			/>
			
			<button aria-label={"search year"}>
				<img width={35} src="/right-arrow.svg" alt="right-arrow"/>
			</button>
		</form>
	);
};

export default YearFilter;
