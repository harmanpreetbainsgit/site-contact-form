const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function sendMail(data) {
  const { name, email, phone, location, message } = data;

  return resend.emails.send({
    from: "Contact Form <codezapsolutions@gmail.com>", // change later to your verified domain
    to: process.env.MAIL_TO,
    subject: `New Contact Message from ${name}`,
    html: `
      <h3>New Contact Request</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Location:</b> ${location}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });
};