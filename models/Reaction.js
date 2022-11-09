const { Schema, model, Types } = require("mongoose");


//creating reactionSchema
const reactionSchema = new Schema(
  {

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
