
// Image upload
const multer = require('multer');

// Multer initailazation
const upload = multer({ 
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            return cb(new Error("Please enter an png, jpg or jpeg image"))
        }
        cb(undefined, true);
    }
})

module.exports = upload;
