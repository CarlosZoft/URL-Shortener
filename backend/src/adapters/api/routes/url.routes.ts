import { Router } from "express";
import { GetURLInfoController } from "../../controller/GetURLInfoController";
import { CreateURLController } from "../../controller/CreateURLController";
import { UpdateVisitorController } from "../../controller/UpdateVisitorController";

const getURLController = new GetURLInfoController();
const createURLController = new CreateURLController();
const updateVisitorController = new UpdateVisitorController();

const router = Router();

router.get("/urls/get/:url_id", getURLController.getInfoUrl);
router.get("/urls/", getURLController.getInfoUrls);
router.post("/urls/", createURLController.handle);
router.get("/:endpoint", updateVisitorController.handle);

export default router;
