const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, required: true},
  });