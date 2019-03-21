const router = require("express").Router();
const apiV1Routes = require("./v1/apiV1");

router.use("/v1", apiV1Routes);

module.exports = router;