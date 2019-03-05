const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true }
})

membershipSchema.set("timestamps", true);
membershipSchema.index({ userId, groupId });
membershipSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, result) => {
        delete result._id;
        delete result.__v;
    }
});

module.exports = mongoose.model("Membership", membershipSchema)