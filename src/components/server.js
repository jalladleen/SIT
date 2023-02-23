const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint for email subscription
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jalladleen@gmail.com',
            pass: 'leenisthebest',
        },
    });

    const mailOptions = {
        from: 'jalladleen@gmail.com',
        to: 'jalladleen@gmail.com',
        subject: 'New Subscriber',
        text: `A new user has subscribed: ${email}`,
    };

    console.log('Sending email...');

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        console.log(`Email sent: ${info.response}`);
        return res.status(200).json({ message: 'Email sent successfully' });
    });
    console.log('Email sent.');

});

// Handles any requests that don't match the above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});