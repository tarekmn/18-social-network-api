const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    // reactionID: {
    //   type: Number,
    // },
    reactionBody: {
      type: String,
      required: true,
    },
    // username: [
    //   {
    //     type: ObjectId,
    //     ref: "User",
    //   },
    // ],
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
