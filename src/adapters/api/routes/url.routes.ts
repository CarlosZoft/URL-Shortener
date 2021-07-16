import { Router } from "express";
import { GetURLInfoController } from "../../controller/GetURLInfoController";
import { CreateURLController } from "../../controller/CreateURLController";

const getURLController = new GetURLInfoController();
const createURLController = new CreateURLController();

const router = Router();

router.get("/:url_id", getURLController.getInfoUrl);
router.get("/", getURLController.getInfoUrls);
router.post("/", createURLController.handle);

export default router;
