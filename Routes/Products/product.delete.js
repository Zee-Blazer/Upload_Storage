const express = require("express");

// Profile Model
const { Product } = require('../../Model/products');

const router = express.Router();

router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(400).send({ msg: `Unable to delete file`, data: null });
        }

        res.status(200).send({ msg: `Image Deleted!`, data: deletedProduct });
    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: "An error occurred!", data: err });
    }
});

module.exports = router;
