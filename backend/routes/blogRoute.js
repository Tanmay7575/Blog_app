import {Router} from 'express';
import { allBlogs, blog, publish, save_draft } from '../controllers/blog.controller.js';

const router=Router();

router.route("/save-draft").post(save_draft);
router.route("/publish").post(publish);
router.route("/AllBlogs").get(allBlogs);
router.route("/findBlog").post(blog);
export default router;