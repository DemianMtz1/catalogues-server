const { Router } = require("express");
const { materialController } = require("../controllers");
const router = Router();

router.get("/", materialController.getAllMaterials);
router.get("/:id", materialController.getMaterialById);
router.post("/", materialController.postMaterial);
router.delete("/:id", materialController.deleteMaterialById);
router.put("/:id", materialController.putMaterialById);

module.exports = router;
