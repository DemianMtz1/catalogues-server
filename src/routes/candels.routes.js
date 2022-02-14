const { Router } = require("express");
const { candelsController } = require("../controllers");
const isAuth = require("../middlewares/validateToken");
const router = Router();

router.get("/", isAuth, candelsController.getAllCandels);
router.get("/:id", candelsController.getCandelById);
router.post("/", isAuth, candelsController.postCandel);
router.delete("/:id", isAuth, candelsController.deleteCandelById);
router.put("/:id", isAuth, candelsController.putCandelById);

module.exports = router;
