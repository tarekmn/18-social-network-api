// ObjectId() method for converting thoughtId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reaction } = require("../models");



module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const data = await Thought.find({})
      // .populate({
      // //   path: "username",
      //   populate: {
      //     path: "reactions",
      //     model: "Reaction"
      //   }
      // })
      if (!data) {
        return res.status(404).json({ message: 'No data in db.' })
      }
      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },


  async getSingleThought(req, res) {
    try {
      const data = await Thought.findOne({ _id: req.params.thoughtId })
      // .populate({
      //   path: "thoughts",
      //   populate: {
      //     path: "reactions",
      //     model: "Reaction"
      //   }
      // }).populate('friends')
      if (!data) {
        return res.status(404).json({ message: 'No thought in db with that ID' })
      }
      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },

  async createThought(req, res) {
    try {
      const data = await Thought.create(req.body)
      //update user with new thought
      // const updateUser = await User.findByIdAndUpdate(
      //   { _id: req.params.username },
      //   { $set: req.body })
      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }

  },

  async updateThought(req, res) {
    try {
      const data = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body })
      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },


  async deleteThought(req, res) {
    try {
      const data = await Thought.findOneAndRemove(
        { _id: req.params.thoughtId })

      if (!data) {
        return res.status(404).json({ message: 'No such thought exists' })
      }

      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },


  async createReaction(req, res) {
    try {
      const data = await Reaction.create(req.body)

      // update user with new thought
      const updateThought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: data } },
        { new: true }
      )

      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }

  },

  async deleteReaction(req, res) {
    try {
      const data = await Reaction.findOneAndRemove(
        { _id: req.params.reactionId })

      // const updateThought = await Thought.findByIdAndUpdate(
      //   { _id: req.params.thoughtId },
      //   { $isDeleted: { reactions: data } },
      //   { new: true }
      // )

      if (!data) {
        return res.status(404).json({ message: 'No such thought exists' })
      }



      res.status(200).json(data)
    } catch (error) {
      console.log(error.message)
      res.status(500).json(error)
    }
  },




};

