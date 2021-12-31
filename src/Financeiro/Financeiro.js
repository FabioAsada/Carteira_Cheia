import "./Financeiro.css";
import { DadosDoMes } from "../DadosDoMes/DadosDoMes";
import { AreaDeInformacoes } from "../AreaDeInformacoes/AreaDeInformacoes";
import { formatandoOMes, filtrandoMes, FiltrarMes } from "../DadosFiltrados/DadosFiltrados";
import { categoria } from "../RelatorioDoMes/RelatorioDoMes";
import { Formulario } from "../Formulario/Formulario";

import { useState, useEffect } from "react";

const mesesDoAno= (mes, ano) => {
    const meses= ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    
    return `${meses[mes]} de ${ano}`;
}


const mostrarMesEAno= data => {
    const transformandoStringEmArray= data[0].data.split('/');

    const mes= Number(transformandoStringEmArray[1]);
    const ano= transformandoStringEmArray[2];

    return mesesDoAno(mes, ano);
};


const contasDoMes= contas => {
    let receita= 0;
    let despesa=0;

    contas.forEach(obj => {
        if(categoria[obj.categoria].expense){
            despesa += obj.valor;
        }else{
            receita += obj.valor;
        }
    });

    return [receita, despesa];
};

const saldoPositivoOuNegativo = valor => {
    const saldo= Number(valor.toFixed(2));
    let cor= '';

    if(saldo >= 0){
        return cor='verde';
    };

    return cor='vermelho'; 
};

const Financeiro= props => {
    const exibindoData= new Date();
    const mes= exibindoData.getMonth();
    const ano= exibindoData.getFullYear();

    // const data= formatandoOMes();
    // const mesEAno= mostrarMesEAno(data);
    // =================================

    const balanco = formatandoOMes();
    let [receita, despesa] = contasDoMes(balanco); 
    // =================================


    const [mesAtual, setMesAtual ] = useState([mes, ano]); 
    const [ entrada, setEntrada ] = useState(receita);
    const [ saida, setSaida ] = useState(despesa);
    const [balancoGeral, setBalancoGeral] = useState(receita - despesa);

    const [exibirTabela, setExibirTabela ]= useState(FiltrarMes(formatandoOMes()));
    // =================================

    const positivoOuNegativo= saldoPositivoOuNegativo(balancoGeral);

    //=======================================
    // Botão para ir ao Mês Anterior
    let mesEAno= mesesDoAno(mesAtual[0], mesAtual[1]);

    const mesAnterior= menos1 => {
        
        if(mesAtual[0] < 1){
            
            setMesAtual([mesAtual[0] = 12, mesAtual[1] -= 1]);
        }

        setMesAtual([mesAtual[0] -= menos1, mesAtual[1]]);

        mesEAno= mesesDoAno(mesAtual[0], mesAtual[1]);
    };

    //=======================================
    // Botão para ir ao Próxímo Mês 

    const proximoMes= mais1 => {
        
        if(mesAtual[0] > 10){
            
            setMesAtual([mesAtual[0] = -1, mesAtual[1] += 1]);
        }

        setMesAtual([mesAtual[0] += mais1, mesAtual[1]]);

        mesEAno= mesesDoAno(mesAtual[0], mesAtual[1])
    }
    
    //==================================
    //==================================
    // Mudança de Estado dos Meses

    useEffect(() => {    
        setExibirTabela(FiltrarMes(filtrandoMes(mesAtual)));

        const [receita, despesa] =  contasDoMes(filtrandoMes(mesAtual));       
        
        setEntrada(receita);
        setSaida(despesa);
        setBalancoGeral(receita - despesa);

    }, [mesAtual]);


    //================================
    //================================

    return(<>

        <div className="container-financeiro">

        {/* Área de mostrar receita, despesas e balanço  */}
            <AreaDeInformacoes infoMesEAno={[mesEAno, entrada, saida, balancoGeral, positivoOuNegativo, mesAnterior, proximoMes]}/>

        {/* Input: Inserção de dados */}
            <Formulario inserirDados={[setExibirTabela, mesAtual, contasDoMes, setEntrada, setSaida, setBalancoGeral]}/>

        {/* Mostrar os dados do mês */}
            <DadosDoMes mostrarTabela={[exibirTabela]}/>

        </div>
    </>)
};

export default Financeiro;