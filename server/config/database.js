const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
      const uri = process.env.MONGODB_URI;
      
      if (!uri) {
        throw new Error('A string de conexão do MongoDB não está definida');
      }
  
      await mongoose.connect(uri);
      
      console.log('MongoDB Atlas conectado com sucesso');
    } catch (error) {
      console.error('Erro na conexão com MongoDB:', error.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;

// Responsável pela configuração e conexão com o MongoDB
// - Estabelece a conexão com o banco de dados
// - Gerencia as configurações de conexão
// - Trata erros de conexão