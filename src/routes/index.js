const express =  require('express');
const controllers = require("../controllers");

const router = express.Router();

router.route("/").get(controllers.getInfo);

router.route("/trains").get(controllers.getAllTrains);

module.exports = router;