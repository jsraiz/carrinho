const produtos = [
  {
    id: 'abc123',
    nome: 'JSRaiz para FW',
    preco: 300,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'bbc123',
    nome: 'JSRaiz para Node',
    preco: 1200,
    descricao: 'O melhor curso e todos',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'cbc123',
    nome: 'Programação funcional com JS',
    preco: 500,
    descricao: 'O melhor funcional de todos',
    imagem: 'https://lorempixel.com/500/300'
  }
];

const carrinhoItens = {};

function renderizaProduto(produto, index) {
  return `
    <div class="col-sm-4 mb-3">
      <div class="card">
        <div class="card loja__item">
          <img class="card-img-top" src="${produto.imagem}" alt="">
            <div class="card-body">
              <h5 class="card-title">${produto.nome}</h5>
              <small>R$${produto.preco}</small>
              <p class="card-text">${produto.descricao}</p>
              <button data-index="${index}" class="btn btn-primary btn-add">Adicionar</button>
            </div>
            </div>
        </div>
      </div>
  `
}

function renderizaProdutos() {
  let html = '';
  for (let i = 0; i < produtos.length; i++) {
    html = html + renderizaProduto(produtos[i], i);
  }
  return html;
}

function renderizaItemCarrinho(produtoCarrinho) {
  return `
    <div class="card carrinho__item">
      <div class="card-body">
        <h5 class="card-title">${produtoCarrinho.nome}</h5>
        <p class="card-text">Preço unidade: R$${produtoCarrinho.preco} | Quantidade: ${produtoCarrinho.quantidade}</p>
        <p class="card-text">Valor: R$${produtoCarrinho.preco * produtoCarrinho.quantidade}</p>
        <button data-produto-id="${produtoCarrinho.id}" class="btn btn-danger btn-sm btn-remove">Remover</button>
      </div>
    </div>
  `
}

function renderizaCarrinho() {
  let html = '';
  for (let produtoId in carrinhoItens) {
    html = html + renderizaItemCarrinho(carrinhoItens[produtoId]);
  }

  document.querySelector('.carrinho__itens').innerHTML = html;
}

function renderCarrinhoTotal() {
  let total = 0;

  for (let produtoId in carrinhoItens) {
    total = total + (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade);
  }

  document.querySelector('.carrinho__total')
    .innerHTML = `<h6>Total: <strong>R$${total}</strong></h6>`;
}

function adicionaItemNoCarrinho(produto) {
  if (!carrinhoItens[produto.id]) {
    carrinhoItens[produto.id] = produto;
    carrinhoItens[produto.id].quantidade = 0;
  }

  ++carrinhoItens[produto.id].quantidade;

  renderizaCarrinho();
  renderCarrinhoTotal();
}

document.body
  .addEventListener('click', function(event) {
    const elemento = event.target;

    if (elemento.classList.contains('btn-add')) {
      const index = parseInt(elemento.getAttribute('data-index'), 10);
      const produto = produtos[index];

      adicionaItemNoCarrinho(produto);
    }

    if (elemento.classList.contains('btn-remove')) {
      const produtoId = elemento.getAttribute('data-produto-id');
      if (carrinhoItens[produtoId].quantidade <= 1) {
        delete carrinhoItens[produtoId];
      } else {
        --carrinhoItens[produtoId].quantidade;
      }

      renderizaCarrinho();
      renderCarrinhoTotal();
    }
  });

document.querySelector('.loja').innerHTML = renderizaProdutos();

