const { Router } = require("express");
const { soapsController } = require("../controllers");
const isAuth = require("../middlewares/validateToken");
const multer = require("multer");
const upload = multer();
const router = Router();

router.get("/", isAuth, soapsController.getAllSoaps);
router.get("/:id", soapsController.getSoapById);
router.post("/", isAuth, upload.single("img"), soapsController.postSoap);
router.delete("/:id", isAuth, soapsController.deleteSoapById);
router.put("/:id", isAuth, soapsController.putSoapById);

module.exports = router;
