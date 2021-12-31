import { RelatorioDoMes, categoria} from "../RelatorioDoMes/RelatorioDoMes";
import "./TableData.css";

import { CoresNosDadosDeCategoria } from "../CoresNosDadosDeCategoria/CoresNosDadosDeCategoria";

export const FiltrarMes= listaFiltrada => {
    let data = listaFiltrada;

    return(<>
        <div className="container-da-tabela">
            
            {data.map((_, index) => {

                return (<tr key={index}>

                    <td className="dadosDaLinha">{data[index].data}</td>

                    <td className="dadosDaLinha dadosDaLinha-categoria">{CoresNosDadosDeCategoria(categoria[data[index].categoria].titulo, categoria[data[index].categoria].color)}</td>

                    <td className="dadosDaLinha dadosDaLinha-titulo">{data[index].titulo}</td>

                    <td className="dadosDaLinha dadosDaLinha-valor"> {CoresNosDadosDeCategoria(data[index].valor, categoria[data[index].categoria].expense)}</td>

                </tr>);
            })}
        </div>
        
    </>);
};


export const formatandoOMes= () => {
    
    return RelatorioDoMes
        .filter(obj => {
            let dataAtual= new Date();
            let mesAtual= dataAtual.getMonth()  + 1;
            let anoAtual= dataAtual.getFullYear();

            let data= obj.data;
            let mes= data.getMonth() + 1;
            let ano= data.getFullYear();
            
            if(mesAtual === mes && anoAtual === ano){
                return true;
            }

            return false;
        })
        .map(obj => {
            let data= obj.data;
            let ano= data.getFullYear();
            let mes= data.getMonth() + 1;
            let dia= data.getDate();
            
            return {
                ...obj, 
                data:`${acrescentandoZero(dia)}/${acrescentandoZero(mes)}/${ano}`};
        })
        .sort(function (a, b) {
            if (a.data > b.data) {
                return 1;
            }
            if (a.data < b.data) {
                return -1;
            }
            
            return 0;
        })
};

export const filtrandoMes= dados => {
    
    return RelatorioDoMes
        .filter(obj => {
            let mesAtual= dados[0];
            let anoAtual= dados[1];

            let data= obj.data;
            let mes= data.getMonth();
            let ano= data.getFullYear();
            
            if(mesAtual === mes && anoAtual === ano){
                return true;
            }

            return false;
        })
        .map(obj => {
            let data= obj.data;
            let ano= data.getFullYear();
            let mes= data.getMonth() + 1;
            let dia= data.getDate();
            
            return {
                ...obj, 
                data:`${acrescentandoZero(dia)}/${acrescentandoZero(mes)}/${ano}`};
        })
        .sort(function (a, b) {
            if (a.data > b.data) {
                return 1;
            }
            if (a.data < b.data) {
                return -1;
            }
            
            return 0;
        })
};


const acrescentandoZero= number => {
    if(number < 10){
        return `0${number}`;
    };

    return number;
}
