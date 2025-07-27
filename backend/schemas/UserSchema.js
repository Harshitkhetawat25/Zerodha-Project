const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new Schema( {
    username : {
        type: String,
        required: [true,"Username is required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true,"Email is required"],
    } ,
    password:{
        type: String,
        required: [true,"Password is required"],
    },
    createdAt:{
        type:Date,
        default: new Date(),
    }

});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {UserSchema};