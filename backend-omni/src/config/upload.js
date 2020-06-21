const multer = require('multer');
const path = require('path');

module.exports = {
 storage:  multer.diskStorage({
 destination: path.resolver(_dirname,'..','..', 'Uploads'),
 filename: (req, file, cb) => { // cb = callback
   const ext = path.extname(file.originalname);
   const name = path.basename(file.originalname, ext);
   cb(null, '${name}-${Date.now()}${ext}')
 }
 }),
};