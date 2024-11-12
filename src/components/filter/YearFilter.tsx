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
			className="flex justify-center ">
			<input type="number"
					className="w-24 py-[6px] px-2 rounded-[4px] shadow text-black"
			        placeholder="or:2023"
			        onChange={(e) => setYear(e.target.value)}
			       
			       
			/>
			
			<button>
				<img width={35} src="/right-arrow.svg" alt=""/>
			</button>
		</form>
	);
};

export default YearFilter;
