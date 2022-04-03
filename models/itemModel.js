import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  accessionId: {
    type: String,
    required: true,
    unique: true
  },
  donorInfo: {
    type: String,
  },
  storageLocation: {
    type: String,
  },
  condition: {
    type: String,
  },
  material: {
    type: String,
  },
  dimensions: {
    type: String,
  },
  date:{
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String
  },
  companyName: {
    type: String
  }
});
const Item = mongoose.model("Item", itemSchema);
export default Item;
