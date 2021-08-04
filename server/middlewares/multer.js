const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './data/documents')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`)
    }
  })
let upload = multer({ storage:storage})


module.exports = upload