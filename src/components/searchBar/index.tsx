import React, {FormEvent, useMemo, useState} from 'react';
import ReactSelect from 'react-select';
import {makes} from "../../utils/constants.ts";
import {useSearchParams} from "react-router-dom";

const SearchBar = () => {
	
	const [params, setParams] = useSearchParams ();
	const [make, setMake] = useState<string> (params.get ("make") || "");
	const [model, setModel] = useState<string> (params.get ("model") || "");
	
	const options = useMemo (() =>
		makes.map ((item) => ({
			value: item, label: item
		})), []);
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault ();
		setParams ({make, model})
	}
	
	const selected = {
		label: params.get ("make") || '',
		value: params.get ("make") || "",
	}
	
	return (
		
		<form onSubmit={handleSubmit} className="searchbar gap-3">
			<div className="searchbar__item">
				<ReactSelect
					onChange={(e) => setMake (e!.value)}
					options={options}
					defaultValue={selected}
					placeholder="Marka Seciniz"
					className="w-full text-black"/>
				
				<button aria-label='search' className='ml-3 sm:hidden'>
					<img src="/search.svg" alt="search icon" className='size-[40px]'/>
				</button>
			</div>
			
			<div className='searchbar__item'>
				
				<label htmlFor="model" className='absolute ml-2 mb-1'>
					<img width={35} src="/model-icon.png" alt="search-icon"/>
				</label>
				
				<input type="text"
				       title='seacrh model'
				       id='model'
				       placeholder="Orn: Civic"
				       defaultValue={params.get ("model") || ""}
				       onChange={(e) => setModel (e.target.value)}
				       className='searchbar__input rounded text-black'/>
				
				<button className='ml-3' aria-label='search'>
					<img src="/search.svg" alt="right arrow search icon" className='size-[40px]'/>
				</button>
			</div>
		</form>
	
	);
};

export default SearchBar;
