// ObjectId() method for converting userId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reaction } = require("../models");



module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({}).populate({
        path: "thoughts",
        populate: {
          path: "reactions",
          model: "Reaction"
        }
      }).populate('friends')
      if (!users) {
        return res.status(404).json({ message: 'No users in db.' })
      }
      res.status(200).json(users)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },


  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).populate({
        path: "thoughts",
        populate: {
          path: "reactions",
          model: "Reaction"
        }
      }).populate('friends')
      console.log(user)
      if (!user) {
        return res.status(404).json({ message: 'No users in db with that ID' })
      }
      res.status(200).json(user)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },

  async createUser(req, res) {
    try {
      const data = User.create(req.body)
      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }

  },

  async updateUser(req, res) {
    try {
      const data = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body })
      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },


  async deleteUser(req, res) {
    try {
      const data = await User.findOneAndRemove(
        { _id: req.params.userId })

      if (!data) {
        res.status(404).json({ message: 'No such user exists' })
      }

      const removeThought = await Thought.deleteMany({ username: req.params.userId })

      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },

};