const { Router } = require("express");
const { materialController } = require("../controllers");
const isAuth = require("../middlewares/validateToken");
const router = Router();

router.get("/", materialController.getAllMaterials);
router.get("/:id", materialController.getMaterialById);
router.post("/", isAuth, materialController.postMaterial);
router.delete("/:id", isAuth, materialController.deleteMaterialById);
router.put("/:id", isAuth, materialController.putMaterialById);

module.exports = router;
