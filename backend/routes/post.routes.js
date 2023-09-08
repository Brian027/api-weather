const express = require('express');
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require('../controllers/post.controller');
const router = express.Router();

router.get("/apiWeather", getPosts);

router.post("/apiWeather", setPosts);

router.put("/apiWeather/:id", editPost);

router.delete("/apiWeather/:id", deletePost);

router.patch("/apiWeather/like-post/:id", likePost);

router.patch("/apiWeather/dislike-post/:id", dislikePost);

module.exports = router;