import "./DadosDoMes.css";

export const DadosDoMes= props => {

    return(<>

        <div className="dados-do-mes-container">
            {/* Tabela do Mês */}
            
            <table>

                <thead>
                    <tr className="cabecalho-da-tabela">
                        <th className="dados-do-cabecalho">Data</th>
                        <th className="dados-do-cabecalho">Categoria</th>
                        <th className="dados-do-cabecalho">Título</th>
                        <th className="dados-do-cabecalho valor">Valor</th>
                    </tr>
                </thead>

                <tbody>
                    {props.mostrarTabela[0]}
                </tbody>
            
            </table>

        </div>
    </>);
}