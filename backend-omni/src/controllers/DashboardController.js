const Spot = require('...module/Spot');
module.exports = {
  show(req, res) {
    const {user_id } = req.headers,
    const spot = await Spot.find({user: user_id})

    return res.json(spots);
    
    }
  
}