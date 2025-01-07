const express = require("express");

// Profile Model
const { Profile } = require("../../Model/profile");

const router = express.Router();

router.get("/specific/:id", async (req, res) => {
    try{
        const image = await Profile.findById(req.params.id);

        if(!image) res.status(400).send({ msg: `Unable to retrieve data successfully!!`, data: null });

        res.set("Content-Type", image.avatarType);
        res.send(image.avatar)
    } catch(err) {
        res.status(400).send({ msg: `An error occured!`, data: err });
    }
})

module.exports = router;
