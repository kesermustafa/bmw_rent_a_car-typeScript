import Header from './components/header';
import Hero from './components/hero';
import Filter from "./components/filter";


const App = () => {
    return (
        <div className="bg-[rgb(23,23,23)] min-h-screen text-white">
            <Header />
            <Hero />
            <Filter/>
        </div>
    );
};

export default App;
