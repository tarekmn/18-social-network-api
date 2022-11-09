const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    // _id: {
    //   type: Types.ObjectId
    // },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    thoughtId: {
      type: String,
      ref: "Thought",
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

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;
