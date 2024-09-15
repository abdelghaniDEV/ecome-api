module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/payments/create-session',
      handler: 'payments.createPaymentSession',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
