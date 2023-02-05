import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY)
export default async (req, res) => {
    if (req.method === 'POST') {
        const session = await stripe.checkout.sessions.create({
            cancel_url: 'https://bte-germany.de',
            line_items: [{price: 'price_1MVgXpJRXWbnO82BugNJ8TfS', quantity: 1}],
            mode: 'payment',
            success_url: 'https://bte-germany.de',
        });
        res.send({url: session.url})
    }
}
