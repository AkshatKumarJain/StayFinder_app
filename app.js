import express from "express";
import "dotenv/config.js"
import { connectDB } from "./connection.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`The server is running at port: ${port}.`);
});
