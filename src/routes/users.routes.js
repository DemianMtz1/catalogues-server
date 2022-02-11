const { Router } = require("express");
const { userController } = require("../controllers");
const isAuth = require("../middlewares/validateToken");
const router = Router();

router.get("/", isAuth, userController.getAllUsers);
router.get("/:id", isAuth, userController.getUserById);
router.post("/sign-up", userController.postSignUp);
router.post("/log-in", userController.postLogIn);
router.delete("/:id", isAuth, userController.deleteUserById);
router.put("/:id", isAuth, userController.putUserById);

module.exports = router;
