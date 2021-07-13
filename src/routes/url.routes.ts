import { Router } from "express";
import { GetURLInfoController } from '../controller/GetURLInfoController'

const getURLController = new GetURLInfoController();

const router = Router();

router.get('/', getURLController.getInfoUrls);
router.get('/:url_id', getURLController.getInfoUrl);

export default router;