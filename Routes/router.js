const express = require("express");
const router = express.router();
const products = require('../Models/product');

router.post("/insertProduct", async (req, res) => {
    const { productName, productPrice, productBarcode } = req.body;

    try {
        const pre = await products.findOne({ productBarcode: productBarcode })
        console.log(pre);
        if (pre) {
            res.status(422).json("product is already added")
        } else {
            const addProduct = new products({ productName, productPrice, productBarcode })
            await addProduct.save();
            res.status(201).json(addProduct)
            console.log(addProduct)
        }
    }
    catch (err) {
        console.log(err)
    }
})
router.get("/Product", async (req, res) => {
    try {
        const getProduct = await products.find({})
        console.log(getProduct);
        res.status(201), json(getProduct);
    } catch (err) {
        console.log(err);
    }

})
router.get("/product/:id", async (req, res) => {
    try {
        const getProduct = await products.findById(req.params.id);
        console.log(getProduct);
        res.status(200).json(getProduct);

    } catch (err) {
        console.log(err);
    }
})

router.put("/updateproduct/:id", async (req, res) => {
    const { productName, productPrice, productBarcode } = req.body;
    try {
        const updateproduct = await productBarcode.findByIdAndUpdate(req.params.id, { productName, productPrice, productBarcode }, { new: true });
        console.log("data updated");
        res.status(201).json(updateproduct);
    } catch (err) {
        console.log(err);

    }
})
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedproduct = await products.findByIdAndDelete(req.params.id);
        console.log("data deleted");
        res.status(201).json(deletedproduct);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;