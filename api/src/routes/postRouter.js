const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')

const asyncHandler = require('../middleware/asyncHandler')

router.get('/', asyncHandler(postController.getAll))
router.get('/:id', asyncHandler(postController.getOne))
router.post('/', asyncHandler(postController.create))
router.put('/:id', asyncHandler(postController.update))
router.delete('/:id', asyncHandler(postController.delete))

module.exports = router
