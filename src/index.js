const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = 8080;
const connectDB = require("./config/db.js");
const productRouter = require("./routes/productRoutes.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

connectDB();
app.use("/", productRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));