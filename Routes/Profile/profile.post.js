const express = require("express");

// Profile Schema
const { Profile } = require('../../Model/profile');

// Media Storage
const media = require('../../Middlewares/media');

const router = express.Router();

router.post("/new", media.single("upload"), async (req, res) => {

    // Creating an instance of the user profile
    const profile = new Profile({
        avatar: req.file.buffer,
        avatarType: req.file.mimetype
    })

    // Creating a try and catch block for error handling
    try {
        const data = await profile.save(); // Saving the user profile

        if(!data) res.status(400).send({ msg: `Unable to create a user profile!`, data: null });

        res.status(201).send({ msg: "User profile successfully created!", data: data._id });
    } catch(err) {
        res.status(400).send({ msg: `An error occured!!`, data: err });
    }
})

router.post("/update", media.single("upload", async (req, res) => {
    try {
        const data = await Profile.findByIdAndUpdate(
            { _id: req.body.id },
            { avatar: req.file.buffer, avatarType: req.file.mimetype },
            { new: true }
        );

        if(!data) res.status(400).send({ msg: `Unable to update image!`, data: null });

        res.status(200).send({ msg: "Image updated successfully!!", data });
    } catch(err) {
        res.status(400).send({ msg: `An error occured!`, data: err });
    }
}))

module.exports = router;
