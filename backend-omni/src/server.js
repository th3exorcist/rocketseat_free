const express = require('express'); // importar dependência express
const routes = require('./routes'); // importar as routes com caminho relativo
const mongoose = require('mongoose'); // importar dependência do banco de dados
const cors = require('cors');
const path = require('path');
const sockeio = require('socket.io');
const http = require('http');

const app = express();
const server = http.server(app);
const io = socketio(server);

io.on('connection', socket => {
 
    console.log('user connected', socket.id);
});
 
mongoose.connect('url do banco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});
app.use(cors());
app.use(express.json()); // utiliza formato json
app.use('/files', express.static(path.resolve(_dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333); // localhost:3333