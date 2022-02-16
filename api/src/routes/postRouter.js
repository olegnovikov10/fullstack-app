const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')
const fileMiddleware = require('../middleware/file')


router.get('/', postController.getAll)
router.get('/:id', postController.getOne)
router.post('/', postController.create)
router.put('/:id', postController.update)
router.delete('/:id', postController.delete)
router.get('/:id/avatar', postController.getAvatar)
router.post('/:id/avatar', fileMiddleware.single('avatar'), postController.addFile)


module.exports = router
