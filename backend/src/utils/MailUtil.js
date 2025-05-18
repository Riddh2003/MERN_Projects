const mailer = require('nodemailer');

const mailsend = async (to, subject, text) => {
    const transporter = mailer.createTransport({
        service: "gmail",
        auth: {
            user: "riddhmodi420@gmail.com",
            pass: "kbwg tyum fnii ijph"
        }
    })

    const mailOptions = {
        from: "riddhmodi420@gmail.com",
        to: to,
        subject: subject,
        html: `<html><h1>${text}</h1></html>`
    }

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log(mailResponse);
}

module.exports = {
    mailsend
}

