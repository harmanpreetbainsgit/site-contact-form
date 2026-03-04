const nodemailer = require("nodemailer");

console.log('check if env is correct----------START');
console.log(process.env.SMTP_HOST);
console.log(process.env.SMTP_PORT);
console.log('check if env is correct----------END');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection on startup (VERY IMPORTANT FOR RENDER)
transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server Ready");
  }
});

module.exports = async function sendMail(data) {
  const { name, email, phone, location, message } = data;

  return transporter.sendMail({
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: email,
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