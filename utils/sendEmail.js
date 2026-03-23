const nodemailer = require("nodemailer");

const sendEmail = async (subject, html) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: `"Savorka Bot" <${process.env.EMAIL_USER}>`, // BOT email
        to: process.env.RECEIVER_EMAIL,
        subject,
        html
    });
};

module.exports = sendEmail;