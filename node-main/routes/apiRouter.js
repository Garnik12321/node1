const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController.js')

router.get('/users', apiController.getUsers)
router.post('/users/:id', apiController.delUser)
router.get('/posts', apiController.getPosts)
router.post('/posts', apiController.addPosts)
router.post('/comments', apiController.addCommentsByPost)
router.get('/comments/:post_id', apiController.getCommentsByPost)
router.put('/comments/:post_id', apiController.changeCommentsByPost)
router.post('/comments/:id', apiController.delComment)

module.exports = router