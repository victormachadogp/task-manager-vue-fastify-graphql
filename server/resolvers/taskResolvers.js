const Task = require('../models/Task');

const taskResolvers = {
  Query: {
    tasks: async () => {
      try {
        return await Task.find();
      } catch (error) {
        throw new Error('Erro ao buscar tarefas: ' + error);
      }
    },
    task: async (_, { id }) => {
      try {
        return await Task.findById(id);
      } catch (error) {
        throw new Error('Erro ao buscar tarefa: ' + error);
      }
    }
  },
  Mutation: {
    createTask: async (_, { input }) => {
      try {
        const task = new Task(input);
        return await task.save();
      } catch (error) {
        throw new Error('Erro ao criar tarefa: ' + error);
      }
    },
    updateTask: async (_, { id, input }) => {
      try {
        return await Task.findByIdAndUpdate(
          id,
          { $set: input },
          { new: true }
        );
      } catch (error) {
        throw new Error('Erro ao atualizar tarefa: ' + error);
      }
    },
    deleteTask: async (_, { id }) => {
      try {
        await Task.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error('Erro ao deletar tarefa: ' + error);
      }
    }
  }
};

module.exports = taskResolvers;

// Implementa a lógica das operações GraphQL
// - Contém as funções que executam as queries
// - Implementa as mutations
// - Faz a ponte entre o GraphQL e o MongoDB
// - Trata erros das operações