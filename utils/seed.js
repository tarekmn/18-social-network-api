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
  await User.insertMany(
    [
      {
        username: "Tarek",
        email: "test@gmail.com",
      },
      {
        username: "Tarek",
        email: "test@gmail.com",
      },
    ],
    (insertError) =>
      insertError ? handleError(insertError) : console.log("Inserted")
  );

  // Log out the seed data to indicate what should appear in the database
  console.table(User);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
