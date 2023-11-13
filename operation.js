const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ibehjoshua321@gmail.com',
    pass: 'gjmi mrox lvap agtm'
  }
});

const mailOptions = {
  from: 'ibehjoshua321@gmail.com',
  to: 'marycynthia490@gmail.com',
  subject: 'Sending Email using Node.js from joshua',
  text: 'learning node.js is fun. we are learning node.js from profsain.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});