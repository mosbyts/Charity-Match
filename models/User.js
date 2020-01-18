const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  userCreated: {
    type: Date,
    default: Date.now
  },
  preferences: [
    {
      type: Schema.Types.ObjectId,
      ref: "preferences"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
