const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController.js");
const isAdmin = require("../middlewares/authMiddleware.js");

productRouter.use(isAdmin);

productRouter.get("/products", productController.showProducts);
productRouter.get("/products/:id", productController.showProductById);

productRouter.get("/dashboard", productController.showProducts);
productRouter.post("/dashboard", productController.createProduct);
productRouter.get("/dashboard/new", productController.showNewProduct);
productRouter.get("/dashboard/:id", productController.showProductById);
productRouter.get("/dashboard/:id/edit", productController.showEditProduct);
productRouter.put("/dashboard/:id", productController.updateProduct);
productRouter.delete("/dashboard/:id/delete", productController.deleteProduct);

productRouter.use((req, res) => {
    res.status(404).send(`hola mundo`);
});

module.exports = productRouter;