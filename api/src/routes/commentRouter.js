const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.get('/', commentController.getAll)
router.get('/:id', commentController.getOne)
router.post('/', commentController.create)
router.put('/:id', commentController.update)
router.delete('/:id', commentController.delete)

module.exports = router
