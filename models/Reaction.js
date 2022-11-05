const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    // _id: {
    //   type: Types.ObjectId
    // },
    reactionBody: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
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
