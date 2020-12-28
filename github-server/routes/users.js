var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const User = mongoose.model("User", new mongoose.Schema(), "users");

/* GET users listing. */
router.get("/home", function(req, res, next) {
  res.send("respond with a resource");
});

/**
 * @GET
 * Get github users
 */
router.get("/", async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(401).json({ Error: "No github users yet" });
    }
    res.status(200).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ Error: "Unable to process the request" });
  }
});

module.exports = router;
