const mongoose = require("mongoose");
const Joi = require("joi");

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    players: {
      type: Number,
      min: 2,
      max: 4,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

function validateRoom(data) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    level: Joi.string().valid("easy", "medium", "hard").required(),
    players: Joi.number().min(2).max(4).required(),
    time: Joi.number().required(),
  });

  return schema.validate(data);
}

module.exports = {
  Room,
  validateRoom,
};
