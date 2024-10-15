import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  images: {
    type: [String],
    required: true,
  },
  
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
