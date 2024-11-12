import React from 'react';
import ReactSelect from "react-select";
import {fuels} from "../../utils/constants.ts";
import {useSearchParams} from "react-router-dom";

const SelectFilter = () => {
	
	const [params, setParams] = useSearchParams ()
	
	const fuel = params.get('fuel_type');
	
	const selected = !fuel
		? fuels[0]
		: fuels.find(i=> i.value === fuel);
		
	return (
		<div>
			<ReactSelect
				options={fuels}
				defaultValue={selected}
				className='text-black w-[150px]'
				onChange={(e) => {
					params.set ("fuel_type", e!.value);
					setParams (params)
				}}
			/>
		</div>
	);
};

export default SelectFilter;
