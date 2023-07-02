const exp = require("constants");
let express = require("express")
let connectingToMongoDb = require("./models")
let port =4000;
let app =express()
let path = require("path")
app.use(express.urlencoded())
app.use(express.json())
app.set("view engine", "ejs")

let productRouter =require("./routes/product")
connectingToMongoDb() 

app.use("/products",productRouter)
app.post("/api/products",productRouter);
app.put("/api/products/:userid",productRouter)
app.delete("/api/products/:userid",productRouter)


app.listen(port)