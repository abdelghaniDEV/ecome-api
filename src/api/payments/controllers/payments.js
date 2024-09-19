// @ts-nocheck

'use strict';

const stripe = require('stripe')(process.env.STRIPE_KEY); // Use your Stripe secret key

// module.exports = {
//   async createPaymentSession(ctx) {
//     console.log("Create Payment Session Called");

//     const { cartItems } = ctx.request.body;
//     console.log("Cart Items Received:", cartItems);

//     try {
//       // Map cart items to Stripe line items format
//       const lineItems = cartItems.map(item => ({
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.attributes.title,
//             images: [item.attributes.images.data[0].attributes.url],
//           },
//           unit_amount: Math.round(item.attributes.price * 100),
//         },
//         quantity: item.amount,
//       }));

//       console.log("Line Items for Stripe:", lineItems);

//       // Create Stripe checkout session
//       const session = await stripe.checkout.sessions.create({

//         payment_method_types: ['card'],
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: 'http://localhost:3000/success',
//         cancel_url: 'http://localhost:3000/cancel',
//       });

//       strapi.log.info("Session Created: ", session);

//       // Send the session ID back to the frontend
//       ctx.send({ id: session.id });

//     } catch (err) {
//       strapi.log.error("Error Creating Session: ", err.message);
//       console.error("Error Creating Session:", err.message);
//       ctx.send({ error: err.message });
//     }
//   },
// };


// module.exports = {
//   async createPaymentSession(ctx) {
//     console.log("Create Payment Session Called");

//     const { cart } = ctx.request.body;
//     console.log("Cart Items Received:", cart);

//     try {
//       // Map cart items to Stripe line items format
//       const lineItems = cart.map(item => ({
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.attributes.title,
//             images: [item.attributes.images.data[0].attributes.url],
//           },
//           unit_amount: Math.round(item.attributes.price * 100),
//         },
//         quantity: item.amount,
//       }));

//       console.log("Line Items for Stripe:", lineItems);

//       // Create Stripe checkout session
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: 'http://localhost:3000/success',
//         cancel_url: 'http://localhost:3000/cancel',
//       });

//       strapi.log.info("Session Created: ", session);

//       // Send the session ID back to the frontend
//       ctx.send({ id: session.id });

//     } catch (err) {
//       strapi.log.error("Error Creating Session: ", err.message);
//       console.error("Error Creating Session:", err.message);
//       ctx.send({ error: err.message });
//     }
//   },
// };

module.exports = {
  async createPaymentSession(ctx) {
    const { cart } = ctx.request.body;
    console.log(process.env.STRIPE_KEY)
    try {
      // Map cart items to Stripe line items format
      const lineItems = cart.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.attributes.title,
            // images: [item.attributes.images.data[0].attributes.url],
          },
          unit_amount: Math.round(item.attributes.price * 100),
        },
        quantity: item.amount,
      }));


      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://abdelghanidev.github.io/ecommerce-demo/success',
        cancel_url: 'http://abdelghanidev.github.io/ecommerce-demo/cancel',
      });

      console.log("Session Created:", session);


      // Send the session ID back to the frontend
      ctx.send({ id: session.id });

    } catch (err) {
      console.error("Error Creating Session:", err); // Print full error details
      ctx.send({ error: err.message });
    }
  },
};
