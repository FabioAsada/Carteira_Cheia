import "./Formulario.css";
import { categoria, RelatorioDoMes } from "../RelatorioDoMes/RelatorioDoMes";

import { FiltrarMes, filtrandoMes} from "../DadosFiltrados/DadosFiltrados";

export const Formulario= props => {
    const novoObjeto= {};
    const [setExibirTabela, mesAtual, contasDoMes, setEntrada, setSaida, setBalancoGeral] = props.inserirDados;
    
    const onChange= (evento) => {
        const { name, value }= evento.target;
        
        if(name === 'data'){
            const [ ano, mes, dia ] = value.split('-');    
            
            novoObjeto[name]= new Date(Number(ano), Number(mes - 1), Number(dia));
        
            return;
        }

        if(name === 'categoria'){

            if(value === "Alimentação"){
                novoObjeto[name]='food';
                return;
            }else if(value === "Aluguel"){
                novoObjeto[name]='aluguel';
                return;
            }else{
                novoObjeto[name]='salario';
                return;
            }
        }

        if(name === 'valor'){
            const number= Number(value);
            novoObjeto[name]= number;
            return;
        }
        
        novoObjeto[name]=value;
    };

    const onSubmit= (evento) => {
        evento.preventDefault();
        RelatorioDoMes.push(novoObjeto);
        
        setExibirTabela(FiltrarMes(filtrandoMes(mesAtual)));

        const [receita, despesa] =  contasDoMes(filtrandoMes(mesAtual));

        setEntrada(receita);
        setSaida(despesa);
        setBalancoGeral(receita - despesa);
        
    }

    return(<>
        <div className="container-formulario">
            
            <form className="formulario" onSubmit={onSubmit}>

                <div>
                    <div className="titulo-formulario">Data</div>  
                    <input type='date' name='data' onChange={onChange}/>
                </div>

                <div>
                    <div className="titulo-formulario">Categoria</div>  
                    <select name='categoria' onChange={onChange}>
                        
                        <option></option>
                        <option>Alimentação</option>
                        <option>Aluguel</option>
                        <option>Salário</option>
                        
                    </select>
                </div>

                <div>
                    <div className="titulo-formulario">Título</div>  
                    <input type='text' name='titulo' onChange={onChange}/>
                </div>

                <div>
                    <div className="titulo-formulario">Valor</div>  
                    <input type='text' name='valor'onChange={onChange}/>
                </div>

                <div>
                    <div className="titulo-formulario">
                        <button type='submit' className="botao-enviar">
                            Adicionar
                        </button>
                    </div>  
                </div>

            </form>
            
        </div>
    </>)
}