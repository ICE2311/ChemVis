import express from "express";
import { createPost, getPostById, getPosts } from "../controllers/postController.js";

const router = express.Router()

router.post('/create', createPost)
router.get('/:postId', getPostById)
router.get('/posts', getPosts)

export default router