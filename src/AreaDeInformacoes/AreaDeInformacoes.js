import "./AreaDeInformacoes.css";
import Esquerda from "../imagens/esquerda.png"
import Direita from "../imagens/direita.png";


export const AreaDeInformacoes= props => {

    const [mesAtual, entrada, saida, balancoGeral, positivoOuNegativo, mesAnterior, proximoMes] = props.infoMesEAno; 
    
    return(<>
        <div className="AreaDeInformacoes">

            {/* div do Calendário */}
            <div className="calendario">

                <div className="seta">
                    <button onClick={ () => mesAnterior(1)}>
                        <img src={Esquerda}/>
                    </button>
                </div>

                <div className="exibindo-mes-e-ano">
                    {mesAtual}
                </div>

                <div className="seta">
                    <button onClick={() => proximoMes(1)}>
                        <img src={Direita}/>
                    </button>
                </div>

            </div>


            <div className="container-balanco">


                <div className="receita">
                    Receita
                    <span>R$ {entrada.toFixed(2)}</span>
                </div>

                <div className="despesa">
                    Despesa
                    <span>R$ {saida.toFixed(2)}</span>
                </div>

                <div className="balanco">
                    Balanço
                    <span className={positivoOuNegativo}>R$ {balancoGeral.toFixed(2)}</span>
                </div>

            </div>


        </div>
    </>)
}