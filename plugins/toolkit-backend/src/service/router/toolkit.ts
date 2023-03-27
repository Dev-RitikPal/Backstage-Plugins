import { Router } from "express";
import { addToolkit, createUpdateToolkit, deleteToolkitById, toolkitById, myToolkits, getToolkits, removeToolkit } from "../controller"

const router = Router();
router.get('/myToolkits', myToolkits)
router.get('/getToolkits', getToolkits)
router.get('/:id', toolkitById)
router.post('/create', createUpdateToolkit)
router.put('/update/:id', createUpdateToolkit)
router.post('/add', addToolkit)
router.delete('/delete/:id', deleteToolkitById)
router.delete('/remove/:toolkit', removeToolkit)
export default router
