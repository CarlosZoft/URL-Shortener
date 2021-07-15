import { Router } from "express";
import { GetURLInfoController } from "../../controller/GetURLInfoController";

const getURLController = new GetURLInfoController();

const router = Router();

router.get("/:url_id", getURLController.getInfoUrl);
router.get("/", getURLController.getInfoUrls);

export default router;
