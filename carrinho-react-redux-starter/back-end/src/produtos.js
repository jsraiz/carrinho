const faker = require('faker');

const geraProdutos = () => {
  let produtos = [];
  for (let i = 0; i < 50; i++)  {
    const nome = faker.commerce.productName();
    produtos[i] = {
      id: faker.random.uuid(),
      slug: faker.helpers.slugify(nome.toLowerCase()),
      nome,
      imagem: faker.image.image(),
      preco: faker.commerce.price(),
      descricao: faker.lorem.words(8),
      estoque: faker.random.number(10),
      categoria: faker.commerce.department()
    } 
  }

  return produtos;
}

let produtos = geraProdutos();

const paginaProdutos = (produtos, pagina = 1) => {
  const ultimaPagina = Math.ceil(produtos.length / 9);
  const paginaInt = parseInt(pagina, 10);
  const primeiraPagina = 1;

  const inicio = (paginaInt - 1) * 9;
  const produtosPagina = produtos.slice(inicio, inicio + 9);

  const temProximaPagina = inicio + 9 < produtos.length;
  const temPaginaAnterior = paginaInt > 1;

  const produtosPaginado = {
    data: produtosPagina,
    first: primeiraPagina,
    last: ultimaPagina
  }

  if (temProximaPagina) {
    produtosPaginado.next = paginaInt + 1;
  }

  if (temPaginaAnterior) {
    produtosPaginado.prev = paginaInt - 1;
  }

  return produtosPaginado;
};

const pegaProdutosPorCategoria = (categoria, pagina) => (
  paginaProdutos(
    produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase()),
    pagina
  )
);

const pegaTodosOsProdutos = (pagina) => (
  paginaProdutos(produtos, pagina)
);

const pegaProduto = slug => ({
  data: produtos.filter(produto => produto.slug === slug).pop()
});

const pegaCategorias = () => (
  {
    data: Array.from(new Set(
      produtos
        .map(prod => prod.categoria)
      )
    )
  }
);

module.exports = {
  pegaTodosOsProdutos,
  pegaProdutosPorCategoria,
  pegaProduto,
  pegaCategorias
}