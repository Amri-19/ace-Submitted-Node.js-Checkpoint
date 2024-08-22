const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', 
    pass: 'your-password'         
  }
});


const mailOptions = {
  from: 'your-email@gmail.com',      
  to: 'recipient-email@gmail.com',   
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from a Node.js application.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
