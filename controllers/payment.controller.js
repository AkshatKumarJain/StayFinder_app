import Stripe from "stripe"
import "dotenv.config.js"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkout_session = async (req, res) => {
    const { price, email } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        customer_email: email,
        name: "Test Item",
        description: "Mock payment for demo",
        amount: price
    })
    
}