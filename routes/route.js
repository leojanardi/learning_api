var express = require("express");
const userController = require('../controllers/user.controller');
const helpController = require('../controllers/help.controller');

const router = express.Router();

router.get("/user/nextTheme", userController.theme);
router.get("/user/numbers", userController.statistics);
router.get("/user/team", userController.team);
router.get("/help/list", helpController.list);
router.post("/help/ask", helpController.ask);

module.exports = router;