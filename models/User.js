const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// api({ObjectId, update preferences})

const userSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: {type: String, required: false },
  username: { type: String, required: false },
  password: { type: String, required: false },
  userCreated: {
    type: Date,
    default: Date.now
  },
  preferences: {type: Schema.Types.Mixed, required: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
