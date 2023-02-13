import mongoose from "mongoose";

const { Schema } = mongoose;

const restaurantShema = new Schema({
  restaurantID: String,
  reviews: {
    good: {
      count: Number,
      aspects: [{ name: String, key: String, value: Number }],
    },
    neutral: {
      count: Number,
      aspects: [{ name: String, key: String, value: Number }],
    },
    bad: {
      count: Number,
      aspects: [{ name: String, key: String, value: Number }],
    },
  },
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantShema);
export default Restaurant;
