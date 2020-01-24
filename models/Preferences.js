const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preferencesSchema = new Schema({
  question1: { type: String },
  question2: { type: String },
  question3: { type: String },
  question4: { type: String },
  preferenceSet: {
    type: Date,
    default: Date.now
  },
});

const Preferences = mongoose.model("Preferences", preferencesSchema);

module.exports = Preferences;
