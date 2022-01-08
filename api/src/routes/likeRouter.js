const Router = require('express')
const router = new Router()
const likeController = require('../controllers/likeController')

router.get('/', likeController.getAll)
router.get('/:id', likeController.getOne)
router.post('/', likeController.create)
router.put('/:id', likeController.update)
router.delete('/:id', likeController.delete)

module.exports = router
