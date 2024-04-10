import { Router } from "express";

import { getChecklists, syncChecklist } from "../controller";

const router = Router();

router.get('/getChecklists', getChecklists)
router.get('/syncYaml',syncChecklist)

export default router
