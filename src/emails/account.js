const mailgun = require('mailgun-js');

// const emailAPIkey = 'ee915183dd49344fe28050db4231ba4f-64574a68-aea9cf06';

const DOMAIN = 'sandbox81e2e98d287c464a940b9612146102c3.mailgun.org';
const mg = mailgun({ apiKey: process.env.EMAIL_API_KEY, domain: DOMAIN });

const sendWelcomeEmail = (email, name) => {
  const data = {
    from: 'Excited User <postmaster@sandbox81e2e98d287c464a940b9612146102c3.mailgun.org>',
    to: email,
    subject: 'Thanks for joining in.',
    text: `Welcome to the app, ${name}`,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
};

const cancellationEmail = (email, name) => {
  const data = {
    from: 'Excited User <postmaster@sandbox81e2e98d287c464a940b9612146102c3.mailgun.org>',
    to: email,
    subject: 'Cancelleation email',
    text: `We will miss you, ${name}`,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
};

module.exports = {
  sendWelcomeEmail,
  cancellationEmail,
};
