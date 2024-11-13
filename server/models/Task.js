const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: String,
  completed: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Task', TaskSchema);

// Define o modelo (schema) do MongoDB para as tarefas
// - Especifica a estrutura dos dados
// - Define tipos dos campos (String, Boolean, Date)
// - Define valores padrão
// - Define campos obrigatórios