let valorFinal;
limpar();

function adicionar(){
let produto = document.getElementById('produto').value;      
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];

let quantidade = document.getElementById('quantidade').value;
let preço = quantidade * valorUnitario;

let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
</section>`;

valorFinal = valorFinal + preço;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$${valorFinal}`;
quantidade = document.getElementById('quantidade').value = 1;

}

function limpar () {
    valorFinal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}