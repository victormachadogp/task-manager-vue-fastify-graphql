const fastify = require('fastify')({ logger: true });
const { default: mercurius } = require('mercurius');
const connectDB = require('./config/database');
const taskSchema = require('./schema/taskSchema');
const taskResolvers = require('./resolvers/taskResolvers');

// Conectar ao banco de dados
connectDB();

// Registrar GraphQL
fastify.register(mercurius, {
  schema: taskSchema,
  resolvers: taskResolvers,
  graphiql: true
});

// Configurar CORS
fastify.register(require('@fastify/cors'), {
  origin: true
});

// Iniciar servidor
const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: '0.0.0.0' });
    console.log('Servidor rodando na porta 4000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  } 
};

start();

// Arquivo principal do backend
// - Inicializa o servidor Fastify
// - Configura o GraphQL (mercurius)
// - Configura CORS
// - Conecta ao banco de dados
// - Inicia o servidor na porta especificada