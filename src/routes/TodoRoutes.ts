import express from "express"
import { createTodo, getAllFalses, getAllTodos, modifyTodo } from "../controllers/TodoController";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware";

const router = express.Router()

router.post('/', verifyTokenMiddleware, createTodo)
router.get('/', verifyTokenMiddleware, getAllTodos)
router.put('/:id', verifyTokenMiddleware, modifyTodo)
router.get('/false', verifyTokenMiddleware, getAllFalses)

export default router;