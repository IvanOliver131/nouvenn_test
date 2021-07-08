import { Router } from "express";

import authMiddleware from "./app/middlewares/authMiddleware";

import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import BookController from "./app/controllers/BookController";

const router = Router();

router.post('/users', UserController.store);
router.get('/users', UserController.read);
router.post('/auth', AuthController.authenticate);
router.post('/books', BookController.store);
router.put('/books', BookController.update);
router.get('/books', BookController.read);
router.get('/users', authMiddleware, UserController.index);


export default router;