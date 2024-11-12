import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Undefined from "./pages/Undefined.tsx";

const App = () => {
    return (
  
           
           <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="*" element={<Undefined/>} />
           </Routes>

    );
};

export default App;
