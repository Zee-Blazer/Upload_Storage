const express = require("express");

// Profile Model
const { Profile } = require('../../Model/profile');

const router = express.Router();

router.delete("/delete/:id", async (req, res) => {
    try{
        const res = await Profile.findByIdAndDelete(req.params.id);

        if(!res) res.status(400).send({ msg: `Unable to delete file`, data: null })

        res.status(200).send({ msg: `Image Deleted!`, data: res });
    } catch(err) {
        res.status(400).send({ msg: "An error occured!", data: null });
    }
})

module.exports = router;
