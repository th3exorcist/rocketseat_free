const mongoose = require('mongoose'); // importar mongoose

const UserSchema = new mongoose.Schema({ // tabela do banco
  email: String,
});

module.exports = mongoose.model('User', UserSchema); // exportar