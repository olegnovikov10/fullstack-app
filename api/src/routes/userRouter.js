const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const fileMiddleware = require('../middleware/file')

router.get('/', userController.getAll)
router.post('/:id/avatar', fileMiddleware.single('avatar'), userController.addFile)
router.get('/:id', userController.getOne)
router.get('/:id/avatar', userController.getAvatar)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router
