const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "15j03ebt008@anu.ac.ke",
    subject: "Thansk for joining in!",
    text: `Welcome to the App, ${name}. Let me know how you get along with the app.`,
  });
};

const sendExitEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "15j03ebt008@anu.ac.ke",
    subject: "We are Sorry to see you Leave",
    text: `We are sorry to see you leave, ${name}! We would like you to share with us what we could have done differently to keep you as part of our business`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendExitEmail,
};
