const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughttext: {
      type: String,
      required: [true, "USERNAME NEEDED!"],
      minimumLength: 1,
      maximumLength: 128,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get() {
        return (
          Date.toLocalDateString("en-us"),
          {
            day: "numeric",
            weekday: "long",
            month: "short",
            year: "numeric",
          }
        );
      },
    },
    username: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  })
);
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
