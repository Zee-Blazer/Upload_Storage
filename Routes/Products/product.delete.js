const express = require("express");

// Profile Model
const { Profile } = require('../../Model/profile');

const router = express.Router();

router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedProfile = await Profile.findByIdAndDelete(req.params.id);

        if (!deletedProfile) {
            return res.status(400).send({ msg: `Unable to delete file`, data: null });
        }

        res.status(200).send({ msg: `Image Deleted!`, data: deletedProfile });
    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: "An error occurred!", data: err });
    }
});

module.exports = router;
