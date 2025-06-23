// import Stripe from "stripe"
// import "dotenv/config.js"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const checkout_session = async (req, res) => {
//     try {
//         const { price, email, password } = req.body;
//         const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         mode: "payment",
//         customer_email: email,
//         success_url: "https://stripe.com/docs/error-codes/url-invalid",
//         cancel_url: "https://stripe.com/docs/error-codes/url-invalid",
//         name: "Test Item",
//         description: "Mock payment for demo",
//         amount: price
//     })
//     res.status(200).json({
//         id: session.id
//     })
//     } catch (error) {
//         res.status(500).json({
//             message: error
//         })
//     }
// }

import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Mock checkout session creation
export const checkout_session = async (req, res) => {
  try {
    const { price, email } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Test Item",
              description: "Mock payment for demo",
            },
            unit_amount: price * 85, // $10 → 850
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default router;
