const express = require('express'); // importar express

const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController'); // importar controller
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingControleer');



const routes = express.Router(); // controla as rotas


const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store); // método store para criar uma sessão
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots:spot_id/bookings',), BookingController.store);

module.exports = routes; // exportar as rotas