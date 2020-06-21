const Spot = require('...module/Spot')
const User = require('...module/User')
module.exports = {
  async store(req, res) {
      
   async index(req, res) {
       const {tech} = req.query;
       const spots = await Spot.find({techs: tech});
       
       return res.json(spots);
   },
       
   const {filename} = req.file;
   const {company, techs, price} = req.body;
   const {user_id} = req.headers; // contexto
      
   const user = await User.findById(user_id);
      
      if(!user) {
          return res.status(400).({error: 'User does not exists'});
      }
   const spot = await Spot.create({
     user: user_id,
     thumbnail:  filename,
     company,
     techs: techs.split(',').mac(techs.trim()),
     price,
   })
   return res.json(spot);
  }
};