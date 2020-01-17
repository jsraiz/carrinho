const Hapi = require('@hapi/hapi');
const produtos = require('./src/produtos')

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route([
    {
      method: 'GET',
      path: '/produtos',
      options: {
        cors: true
      },
      handler(req, h) {
        return h.response(produtos.pegaTodosOsProdutos(req.query.pagina)).code(200)
      } 
    },
    {
      method: 'GET',
      path: '/produtos/{slug}',
      options: {
        cors: true
      },
      handler(req, h) {
        return h.response(produtos.pegaProduto(req.params.slug)).code(200)
      } 
    },
    {
      method: 'GET',
      path: '/categorias/{categoria}/produtos',
      options: {
        cors: true
      },
      handler(req, h) {
        return h.response(produtos.pegaProdutosPorCategoria(req.params.categoria, req.query.pagina)).code(200)
      }
    },
    {
      method: 'GET',
      path: '/categorias',
      options: {
        cors: true
      },
      handler(req, h) {
        return h.response(produtos.pegaCategorias()).code(200)
      }
    }
  ])

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();