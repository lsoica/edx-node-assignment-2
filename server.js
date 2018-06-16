const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

global.store = {}

let app = express()

app.use(bodyParser.json())

app.get('/posts', routes.posts_routes.getPosts)

app.post('/posts', routes.posts_routes.addPost)

app.put('/posts/:id', routes.posts_routes.updatePost)

app.delete('/posts/:id', routes.posts_routes.removePost)

app.get('/posts/:postId/comments', routes.comments_routes.getComments)

app.post('/posts/:postId/comments', routes.comments_routes.addComment)

app.put('/posts/:postId/comments/:commentId', routes.comments_routes.updateComment)

app.delete('/posts/:postId/comments/:commentId', routes.comments_routes.removeComment)

app.listen(3000)