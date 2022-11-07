const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require("../../controllers/thoughtController");

// // /api/thought
router.route("/").get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thought/:thoughtId/reactions
// router.route("/:reaction").post(createReaction).delete(deleteReaction);

module.exports = router;
