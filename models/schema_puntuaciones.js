var mongoose  = require("mongoose");
var Schema = mongoose.Schema;
 
mongoose.connect("mongodb://localhost/usuarios");
 
var userSchema = new Schema({
   name: String,
   punt: Number
});
 
var User = mongoose.model("User",userSchema);
module.export = User;