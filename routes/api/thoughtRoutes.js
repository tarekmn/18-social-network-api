const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

// // /api/thought
router.route("/").get(getThoughts).post(createThought);

// /api/thought/:userId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
