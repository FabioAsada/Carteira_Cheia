import "./Footer.css";
import facebook from "../imagens/facebook.png";
import github from "../imagens/github.png";
import linkedin from "../imagens/linkedin.png";


const Footer= props => {
    return(<>

        <div className="footer">
            <div className="redes-sociais">
                
                <a href="https://www.facebook.com/fabio.asada.3/">
                    <img src={facebook} width="50px" height="50px" className="facebook"/>
                </a>

                <a href="https://github.com/FabioAsada">
                    <img src={github} width="50px" height="50px" className="github"/>
                </a>

                <a href="https://www.linkedin.com/in/fabio-asada-71191b41/">
                    <img src={linkedin} width="50px" height="53px"/>
                </a>

            </div>

            <div className="desenvolvedor">
                <h3>Criado por <span>Fábio Asada</span> 2021</h3>
            </div>
        </div>

    </>)
};

export default Footer;