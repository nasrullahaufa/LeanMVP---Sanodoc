const express = require('express')
const router = express.Router()
const documentsController = require("../controllers/documentsController")
const upload = require('../middlewares/multer')

router.get('/',documentsController.getAll)
router.post('/', upload.single('File'), documentsController.uploadDocument)



module.exports = router