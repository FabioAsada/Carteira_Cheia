
export const RelatorioDoMes= [
    {data: new Date(2021, 11, 6), categoria:"food", titulo:"MacDonalds", valor:35.60},
    {data: new Date(2021, 10, 15), categoria:"food", titulo:"Burguer King", valor:55.70},
    {data: new Date(2021, 10, 4), categoria:"food", titulo:"OutBack", valor:180.70},
    {data: new Date(2021, 11, 1), categoria:"aluguel", titulo:"Aluguel Apt.", valor:1500.60},
    {data: new Date(2021, 9, 1), categoria:"salario", titulo:"Facebook", valor:2000.65},
    {data: new Date(2021, 9, 8), categoria:"food", titulo:"Restaurante", valor:3500.70},
    {data: new Date(2021, 10, 1), categoria:"salario", titulo:"Facebook", valor:2000.65},
];

export const categoria= {
    food:{titulo: "Alimentação", color:"blue", expense: true},

    aluguel:{titulo: "Aluguel", color:"brown", expense: true},
    
    salario:{titulo: "Salário", color:"green", expense: false},
}
