const { User, Thought } = require("../models");

const thoughtController = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .select("-__v")
      .then((UserData) => {
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single thought by id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .populate({
        select: "-__v",
        path: "thoughts",
        path: "reactions",
      })
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thoughts found with associated ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createNewThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: "No thought with this id" });
        }
        res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete user associated thoughts
  removethought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thought found with that ID" })
          : Thought.findOneAndUpdate(
              { userId: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: "User removed but no thoughts found.",
            })
          : res.json({ message: "Thought successfully removed" })
      )
      .catch((err) => res.status(500).json(err));
  },

  // add reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.params.reactionId } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = thoughtController;
