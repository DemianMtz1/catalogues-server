const express = require("express");
const router = express.Router();
const candelRoutes = require("./candels.routes");
const soapRoutes = require("./soap.routes");
const materialRoutes = require("./material.routes");
const userRoutes = require("./users.routes");
const courseRoutes = require("./course.routes");

const defaultRoutes = [
  {
    path: "/candels",
    route: candelRoutes,
  },
  {
    path: "/soaps",
    route: soapRoutes,
  },
  {
    path: "/materials",
    route: materialRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/courses",
    route: courseRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
