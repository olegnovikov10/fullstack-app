const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const fileMiddleware = require('../middleware/file')

const asyncHandler = require('../middleware/asyncHandler')

router.get('/', asyncHandler(userController.getAll))
router.post('/:id/avatar', fileMiddleware.single('avatar'), userController.addFile)
router.get('/:id', asyncHandler(userController.getOne))
router.get('/:id/avatar', asyncHandler(userController.getAvatar))
router.post('/', asyncHandler(userController.create))
router.put('/:id', asyncHandler(userController.update))
router.delete('/:id', asyncHandler(userController.delete))

module.exports = router
