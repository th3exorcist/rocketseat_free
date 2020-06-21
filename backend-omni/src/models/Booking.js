const mongoose = require('mongose');
const BookingSchema = new mongoose.Schema({
 data String,
 approved Boolean,

user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
},
                                          
spot: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Spot',
}                                         v

});

module.exports = mongoose.model('Spotr', SpotSchema);