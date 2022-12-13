const mongoose = require("mongoose");

//Adding Schemas
const itemsSchema = {
    content: String,
};

//Model
const Item = mongoose.model("Item", itemSchema);

module.exports = { Item, itemsSchema }