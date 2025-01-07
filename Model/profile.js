const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    avatar: {
        type: Buffer
    },
    avatarType: String
}, {
    timestamps: true
})

const Profile = mongoose.model("Profiles", profileSchema);

module.exports = { Profile }
