import "./CoresNosDadosDeCategoria.css";

export const CoresNosDadosDeCategoria= (tipo, cor) => {

    const R$= tipo => {
        
        if(typeof tipo === "number"){
            return `R$ ${tipo}`;
        }
        
        return tipo;
    };

    return (
    
        <div className={String(cor)}>
            {R$(tipo)}
        </div>
    )
}
