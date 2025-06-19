import express from "express";
import "dotenv/config.js"
import { connectDB } from "./connection.js";
import { User } from "./models/user.model.js";
import { Listing } from "./models/listings.model.js";
import { Booking } from "./models/booking.model.js";
import userRouter from "./routes/user.route.js";
import listRouter from "./routes/listing.route.js"
import bookingRouter from "./routes/booking.route.js"

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(listRouter);
app.use(bookingRouter);

app.listen(port, () => {
    console.log(`The server is running at port: ${port}.`);
});
