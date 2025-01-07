const express = require("express");

// Product Model
const { Product } = require("../../Model/products");

const router = express.Router();

router.get("/specific/:id", async (req, res) => {
    try{
        const image = await Product.findById(req.params.id);

        if(!image) res.status(400).send({ msg: `Unable to retrieve data successfully!!`, data: null });

        console.log(image)

        res.set("Content-Type", image.avatarType);
        res.send(image.avatar)
    } catch(err) {
        res.status(400).send({ msg: `An error occured!`, data: err });
    }
})

module.exports = router;
