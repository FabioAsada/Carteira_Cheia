import "./Menu.css";
import { Link } from "react-router-dom";
import Carteira from "../imagens/wallet-solid.svg";

const Menu = props => {
    return(<>
    
        <div className="container">

            <div className="logo">
                <img src={Carteira} width="100px" height="100px"/>
                <span>Cheia</span>
            </div>
            
            <ul className="lista">

                <li className="menu-lateral">
                    <Link to="/" className="link-inicial">Inicial</Link> 
                </li>
                    
                <li className="menu-lateral">
                    <Link to="/financeiro" className="link-financeiro">Financeiro</Link> 
                </li>

            </ul>
        </div>

    </>)
};


export default Menu;