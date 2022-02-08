const { Router } = require("express");
const { soapsController } = require("../controllers");
const router = Router();

router.get("/", soapsController.getAllSoaps);
router.get("/:id", soapsController.getSoapById);
router.post("/", soapsController.postSoap);
router.delete("/:id", soapsController.deleteSoapById);
router.put("/:id", soapsController.putSoapById);

module.exports = router;
