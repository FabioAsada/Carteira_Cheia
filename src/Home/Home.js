import "./Home.css";
import imagem from "../imagens/zen.png";

const Home= props => {
    
    return(<>
    
    <div className="container-imagem">

        <h1>Bem vindo ao Carteira Cheia!</h1>

        <img src={imagem}  className="cara-zen"/>
    </div>
    
    </>);
};

export default Home;