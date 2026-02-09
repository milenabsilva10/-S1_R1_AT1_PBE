import express from 'express'
import CategoriasControllers from '../controllers/CategoriasControllers.js'


const router = express.Router();

router.get("/", CategoriasControllers.index)
router.post("/", CategoriasControllers.store)
router.put("/:id", CategoriasControllers.update)
router.delete("/:id", CategoriasControllers.destroy)

export default router;