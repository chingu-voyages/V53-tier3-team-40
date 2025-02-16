import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    animalType: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Animal = mongoose.model("Animal", animalSchema);

export default Animal;
