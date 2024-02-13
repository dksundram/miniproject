const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  username: String,
  phone: String,
  email: { type: String, required: true, unique: true }, // Ensure emails are unique
  password: { type: String, required: true },
  // cart: [
  //   {
  //     product: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Product",
  //     },
  //     quantity: Number,
  //   },
  // ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
