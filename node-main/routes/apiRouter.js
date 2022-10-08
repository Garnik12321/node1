const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController.js')

router.get('/users', apiController.getUsers)
router.post('/users/:id', apiController.delUser)
router.get('/posts', apiController.getPosts)
router.post('/posts', apiController.addPosts)
router.post('/comments', apiController.addCommentsByPost)
router.get('/comments/:post_id', apiController.getCommentsByPost)
router.delete('/comments/:post_id', apiController.changeCommentsByPost)
router.post('/comments/:id', apiController.delComment)
router.post('/friends', apiController.getFriends)
router.get('/friends/:id', apiController.getFriends)
router.delete('/friends/:id', apiController.delFriends)

module.exports = router