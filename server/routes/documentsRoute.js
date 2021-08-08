const express = require('express')
const router = express.Router()
const documentsController = require("../controllers/documentsController")
const upload = require('../middlewares/multer')
const authenticate = require("../middlewares/authentication")

router.use(authenticate)
router.get('/',documentsController.getAll)
router.get('/:id',documentsController.downloadOne)
router.post('/', upload.single('File'), documentsController.uploadDocument)



module.exports = router