const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function sendMail(data) {
  const { name, email, phone, location, message } = data;

  return resend.emails.send({
    from: "Codezapsolutions <noreply@codezapsolutions.com>", // change later to your verified domain
    to: process.env.MAIL_TO,
    subject: `New message from your website`,
    html: `
      <p>Hi Harmanpreet, <br/>You received a new message:</p>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Location:</b> ${location}</p>
      <p><b>Message:</b>${message}</p>
    `,
  });
};