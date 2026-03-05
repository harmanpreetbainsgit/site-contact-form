const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function sendMail(data) {
  const { name, email, phone, location, message } = data;

  const fromName = process.env.FROM_NAME;
  const fromEmail = process.env.FROM_EMAIL;
  const mailTo = process.env.MAIL_TO;

  return resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: mailTo,
    subject: `New message from your website`,
    html: `
      <p>Hi ${fromName}, <br/>You received a new message:</p>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Location:</b> ${location}</p>
      <p><b>Message:</b>${message}</p>
    `,
  });
};