const { Router } = require("express");
const { candelsController } = require("../controllers");
const router = Router();

router.get("/", candelsController.getAllCandels);
router.get("/:id", candelsController.getCandelById);
router.post("/", candelsController.postCandel);
router.delete("/:id", candelsController.deleteCandelById);
router.put("/:id", candelsController.putCandelById);

module.exports = router;
