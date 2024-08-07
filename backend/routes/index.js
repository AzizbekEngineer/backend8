import express from "express";
import BlogsController from "../controller/blog.js";
import UsersController from "../controller/user.js";
import { auth } from "../middleware/auth.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import { ownerMiddleware } from "../middleware/ownerMiddleware.js";
const router = express.Router();

router.get("/api/blogs", [auth, adminMiddleware], BlogsController.get);
router.get("/api/blogs/search", BlogsController.getBlogSearch);
router.post("/api/blogs", [auth, ownerMiddleware], BlogsController.create);

router.get("/api/users/search", UsersController.getUserSearch);
router.patch("/api/updatePassword", [auth], UsersController.updatePassword);
router.patch("/api/updateProfile", [auth], UsersController.updateProfile);

router.get("/api/practice", [auth], UsersController.practice);

router.get("/api/profile", [auth], UsersController.getProfile);
router.get("/api/users", UsersController.getAllUsers);
router.post("/api/users/sign-up", UsersController.registerUser);
router.post("/api/users/sign-in", UsersController.loginUser);
router.patch("/api/users/:id", UsersController.updateUser);

export default router;
