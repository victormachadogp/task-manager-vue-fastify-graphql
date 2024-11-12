const fastify = require('fastify')({ logger: true });
const { default: mercurius } = require('mercurius');
const connectDB = require('./config/database');
const taskSchema = require('./schema/taskSchema');
const taskResolvers = require('./resolvers/taskResolvers');

