const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing thoughts
  await Reaction.deleteMany({});

  // Insert users

  const user1 = await User.create({
    "username": "Tarek",
    "email": "test@gmail.com",
  });

  const user2 = await User.create({
    "username": "Ben",
    "email": "test2@gmail.com",
  });

  // Insert thought
  const thought1 = await Thought.create({
    "thoughtText": "Hello these are my thoughts",
    "username": user1,
  });

  const thought2 = await Thought.create({
    "thoughtText": "This is the second thought",
    "username": user2,
  });

  await User.findOneAndUpdate(
    { _id: user1._id },
    { $push: { thoughts: thought1._id, friends: user2._id }, },
    { new: true }
  )




  const reaction1 = await Reaction.create({
    "reactionBody": "This is my reaction",
    "username": user2,
  });

  await Thought.findOneAndUpdate(
    { _id: thought1._id },
    { $push: { reactions: reaction1._id }, },
    { new: true }
  )


  // Log out the seed data to indicate what should appear in the database
  console.table(User);
  console.info("Seeding complete!");
});
