import Header from './components/header';
import Hero from './components/hero';
import Filter from "./components/filter";
import List from "./components/list";




const App = () => {
    return (
        <div className="bg-[rgb(23,23,23)] min-h-screen text-white">
            <Header />
            <Hero />
            <Filter/>
            
            <List/>
        </div>
    );
};

export default App;
