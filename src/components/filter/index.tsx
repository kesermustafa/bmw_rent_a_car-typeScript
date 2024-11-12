import SearchBar from '../searchBar';
import SelectFilter from './SelectFilter';
import YearFilter from './YearFilter.tsx';




const Filter = () => {
	return (
		<div id='filter' className="mt-12 padding-x padding-y max-width">
			<div className="home__text-container">
				<h1 className='text-4xl font-extrabold'>Car Catalog</h1>
				<p>Discover cars you might like</p>
			</div>
			<div className='home__filters'>
				<SearchBar/>
				
				<div className='home__filter-container'>
					<SelectFilter/>
					<YearFilter/>
				</div>
			</div>
		</div>
	);
};

export default Filter;


