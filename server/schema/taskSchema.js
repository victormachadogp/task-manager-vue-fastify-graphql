const taskSchema = `
  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    createdAt: String!
  }

  input CreateTaskInput {
    title: String!
    description: String
  }

  input UpdateTaskInput {
    title: String
    description: String
    completed: Boolean
  }

  type Query {
    tasks: [Task!]!
    task(id: ID!): Task
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: ID!, input: UpdateTaskInput!): Task!
    deleteTask(id: ID!): Boolean!
  }
`;

module.exports = taskSchema;

// Define o schema GraphQL
// - Especifica os tipos de dados para o GraphQL
// - Define as queries (consultas) disponíveis
// - Define as mutations (operações de modificação)
// - Define os inputs (dados de entrada) aceitos