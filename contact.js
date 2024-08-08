// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let hasError = false;

        // Clear previous errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            hasError = true;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            hasError = true;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            hasError = true;
        }

        if (!hasError) {
            // Example submission logic
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
});
npm install express nodemailer
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Your Gmail address
            pass: 'your-email-password'   // Your Gmail password
        }
    });

    // Mail options
    const mailOptions = {
        from: email,
        to: 'krayolinkisten7@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let hasError = false;

        // Clear previous errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            hasError = true;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            hasError = true;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            hasError = true;
        }

        if (!hasError) {
            // Send data to the server
            fetch('http://localhost:3000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                })
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            });
        }
    });
});
node server.js