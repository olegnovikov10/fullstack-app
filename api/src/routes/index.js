const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const postRouter = require('./postRouter')
const likeRouter = require('./likeRouter')
const commentRouter = require('./commentRouter')
const authRouter = require('./authRouter')

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/like  ', likeRouter)
router.use('/comment', commentRouter)
router.use('/auth', authRouter)

module.exports = router
