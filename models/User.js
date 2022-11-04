const { Schema, model, Types } = require("mongoose");
const thoughtSchema = require("./Thought");

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      // required: true,
      // max_length: 50,
    },
    email: {
      type: String,
      // required: true,
      // max_length: 50,
    },
    thoughts: [
      {
        type: Types.ObjectId,
        ref: "Thought",
      },
    ],
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
  }
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);

const User = model("User", userSchema);

module.exports = User;
