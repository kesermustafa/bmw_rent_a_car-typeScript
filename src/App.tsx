import Header from './components/header';
import Hero from './components/hero';

const App = () => {
    return (
        <div className="bg-[rgb(23,23,23)] min-h-screen text-white">
            <Header />
            <Hero />
            
            <div>
                <div>
                    <h1>Car Catalog</h1>
                    <p>Discover cars you might like</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default App;