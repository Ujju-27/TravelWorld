import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Stripe from "stripe";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tourRoute.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import bookingRoute from "./routes/bookingRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corseOptions = {
  origin: true,
  credentials: true,
};
const stripe = new Stripe(
  "sk_test_51PeJp6GXKmzJp2YP4YXZ906aZP8rkwSs0ssR92tTM1OGHWGFckEVbRyjx6kEXsAs9EilCEbVXlUhKfUmkHtObVyR00Ek5fO1tn"
);
//testing
app.get("/", (req, res) => {
  res.send("Api is Running");
});

//database.connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB database Connected");
  } catch (err) {
    console.log("MongoDB database Connectection Failed");
  }
};

//middlewares
app.use(express.json());
app.use(cors(corseOptions));
app.use(cookieParser());
app.use("/api/v1/tour", tourRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.post('/api/v1/create-checkout-session', async (req, res) => {
  const { booking, totalCharge } = req.body;
  try {
    const lineItem = {
        price_data: {
          currency: 'usd',
          product_data: {
            name: booking.tourName,
            description: booking.fullName,
          },
          unit_amount: totalCharge * 100,
        },
        quantity: 1,
      };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [lineItem],
      mode: "payment",
      success_url: 'http://localhost:3000/thank-you',
      cancel_url: 'http://localhost:3000/tour',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//running api
app.listen(port, () => {
  connect();
  console.log("Server Running on Port", port);
});
