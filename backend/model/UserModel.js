const { model } = require("mongoose");
const UserSchema = require("../schemas/UserSchema"); // Schema import kiya

const UserModel = model("user", UserSchema);

module.exports = { UserModel }; // Named export model