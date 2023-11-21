// funcoes
function calculaItem (item, escolhaCliente){
    const {id, name, price} = item;
    const {tipoPagamento, quantidadeParcelas} = escolhaCliente;
    const {discount} = condicaoPagamento.find((condicao) => condicao.id === tipoPagamento);
    const valorComDesconto = price - (price * discount);
    const valorParcela = valorComDesconto / quantidadeParcelas;
    const itemCarrito = {
        id,
        name,
        price,
        valorComDesconto,
        valorParcela
    }
    return (itemCarrito)
}

function calculaItems (listaDeProdutos, escolhaCliente){
    const listaDeItems = listaDeProdutos.map((item) => calculaItem(item, escolhaCliente))
    return (listaDeItems)
}

function calculaTotal (listaDeItems){
    const total = listaDeItems.reduce((acc, item) => acc + item.valorComDesconto, 0)
    return (total)
}


// constantes

const p1 = {
    id: "p001",
    name: "notebook lenovo ideapad Gaming 3i",
    price: 4000
}

const condicaoPagamento = [{
    id: "pgT1",
    name: "A vista - Cartao de Debito ou Credito",
    discount: 0.1,
},
{
    id: "pgT2",
    name: "A vista - PIX ou Dinheiro",
    discount: 0.15,
},
{
    id: "pgT3",
    name: "SEM JUROS em 2 vezes - Cartao de Credito",
    discount: 0.1,
},
{
    id: "pgT3",
    name: "Parcelado 3 ou Mais (10% juros) - Cartao de Credito",
    discount: 0.1,
}
]


const escolhaCliente = {
    tipoPagamento: "pgT1",
    quantidadeParcelas: 1,
    listaDeProdutos: [p1]
}


// execucao
const listaDeItems = calculaItems(escolhaCliente.listaDeProdutos, escolhaCliente)
const total = calculaTotal(listaDeItems)


const ticketCompra = {
    listaDeItems,
    total
}

console.log(ticketCompra)