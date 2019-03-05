const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    goal: { type: String, required: true, unique: true },
    description: { tpye: String, required: true, unique: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

groupSchema.set("timestamps", true);
groupSchema.index({ name: 1 }, { unique: true })
groupSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, result) => {
        delete result._id;
        delete result.__v;
    }
})

module.exports = mongoose.model("Group", eventSchema); 