const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB2", {useNewUrlParser: true}, { useUnifiedTopology: true });

const itemsSchema = {
    name: String
  };
  
const Item = mongoose.model("Item", itemsSchema);

const listSchema = {
    name: String,
    items: [itemsSchema]
  };
  
const List = mongoose.model("List", listSchema);

var item= new List({
    name:"movies",
    items:[]
})

List.updateMany({name:"movies"},{$push:{items:{name:"shakti"}}})
.then(()=>console.log("yass"))