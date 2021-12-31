import { Routes , Route } from "react-router-dom";
import Home from "../Home/Home";
import Financeiro from  "../Financeiro/Financeiro";

const Rotas = props => {
    return(<>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/financeiro" element={<Financeiro/>}/>
                
        </Routes>
    </>)
};


export default Rotas;