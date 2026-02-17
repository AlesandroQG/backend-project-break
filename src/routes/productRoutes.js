const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController.js");

productRouter.get("/products", productController.showProducts);
productRouter.get("/products/:id", productController.showProductById);

productRouter.post("/dashboard", productController.createProduct);
productRouter.get("/dashboard/new", productController.showNewProduct);
productRouter.get("/dashboard/:id", productController.showProductById);
productRouter.get("/dashboard/:id/edit", productController.showEditProduct);
productRouter.put("/dashboard/:id", productController.updateProduct);
productRouter.delete("/dashboard/:id/delete", productController.deleteProduct);

module.exports = productRouter;