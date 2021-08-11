import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import cron from 'node-cron'

dotenv.config();

const user_email = process.env.EMAIL;
const user_password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: user_email,
        pass: user_password,
    }
})

const message = {
    from: 'Mailer test <jessika.marquardt56@ethereal.email>',
    to: 'test@test.com',
    title: 'title',
    subject: "Message from node",
    text: 'ինչ որ text',
}

const mailer = (message: object) => {
    transporter.sendMail(message, (err, info) => {
        if (err) console.log(err.message);
        console.log('Email sent: ', info )
    })
}

cron.schedule('*/5 * * * *', () => {
    mailer(message);
})