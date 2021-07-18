import { Router } from "express";
import { GetURLInfoController } from "../../controller/GetURLInfoController";
import { CreateURLController } from "../../controller/CreateURLController";
import { UpdateVisitorController } from "../../controller/UpdateVisitorController";

const getURLController = new GetURLInfoController();
const createURLController = new CreateURLController();
const updateVisitorController = new UpdateVisitorController();

const router = Router();

router.get("/:url_id", getURLController.getInfoUrl);
router.get("/", getURLController.getInfoUrls);
router.post("/", createURLController.handle);
router.put("/:url_id", updateVisitorController.handle);

export default router;