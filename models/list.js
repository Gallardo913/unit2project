const mongoose = require("mongoose");
const {itemsSchema} = require("./itemModel");

//Adding Schemas
const listSchema = {
    name: String,
    formattedName: String,
    toDo: [itemsSchema],
    done: [itemsSchema]
};

//Model
const List = mongoose.model("List", listSchema);

module.exports = List;