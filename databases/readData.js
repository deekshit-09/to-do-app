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

// List.find({"name":"Work"})
// .then((items)=>{
// //    items.map(()=>console.log(items.name) ) 
// console.log(items[0].items)
// })
//   .catch((err) => {
//     console.error(err);
//   });

//   List.find({})
//   .then((items)=>{
//      items.map((hero)=>console.log(hero.name +" "+ hero._id) ) 
// //   console.log(items[0].name)
//   })
//     .catch((err) => {
//       console.error(err);
//     })
let catarr = [];

List.find({})
  .then((items) => {
    items.map((hero) => {
      var x = hero.name;
    //   console.log(x);
      catarr.push(x);
    });

    // Move the console.log(catarr) statement here
    console.log(catarr);
  })
  .catch((err) => {
    console.error(err);
  });
