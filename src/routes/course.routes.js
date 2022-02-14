const { Router } = require("express");
const { courseController } = require("../controllers");
const isAuth = require("../middlewares/validateToken");
const router = Router();

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.post("/", isAuth, courseController.postCourse);
router.delete("/:id", isAuth, courseController.deleteCourseById);
router.put("/:id", isAuth, courseController.putCourseById);

module.exports = router;
