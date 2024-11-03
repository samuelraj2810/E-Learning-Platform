const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_KEY,
    },
});

const sendVerificationEmail = async (email, token) => {
    try {
        const verificationUrl = `http://localhost:3000/verify-email/${token}`;
        await transporter.sendMail({
            from: process.env.USER_MAIL,
            to: email,
            subject: "Verify Your Email",
            html: `<h2>Click <a href="${verificationUrl}">click here</a> to verify your email.</h2>`,
        });
        console.log("mail sent Successfull")
    } catch (error) {
        console.log(error)
    }
};

const forgotPassEmail = async (email, token) => {
    try {
        const verificationUrl = `http://localhost:3001/resetpass/${token}`;
        await transporter.sendMail({
            from: process.env.USER_MAIL,
            to: email,
            subject: "Verify Your Email",
            html: `<h2>Click <a href="${verificationUrl}">Here</a> to reset your password.</h2>`,
        });
        console.log("mail sent Successfull")
    } catch (error) {
        console.log(error)
    }
};


module.exports = {sendVerificationEmail
    ,forgotPassEmail
};
