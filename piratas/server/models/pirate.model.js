const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
    {
      pirateName: {
        type: String,
        required: [true, "Pirate's Name is required"],
      },
      image: {
        type: String,
        required: [true, "Image is required"],
      },
      treasures: {
        type: Number,
        required: [true, "Treasures are required"],
      },
      phrase: {
        type: String,
        required: [true, "Phrase is required"],
      },
      position: {
        type: String,
        required: [true, "Position is required"],
      },
      pegLeg: {
        type: Boolean
      },
      eyePatch: {
        type: Boolean
      },
      hookHand: {
        type: Boolean
      },
      
    },
    { timestamps: true }
  );

  
const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = {PirateSchema, Pirate };