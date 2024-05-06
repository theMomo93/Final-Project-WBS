import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export default async function sendMail(email) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  
  const info = await transporter.sendMail({
    from: 'Port Germany- Immigration Page <mkaminska93@gmail.com>', 
    to: email, 
    subject: "Hello ✔ - instruction on how to recover your password", 
    text: "Please change your password", 
    html: `
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; padding: 0;background-color: #000000;min-height:70vh;width:100%;">
        <p>Change password - Social App!</p>
        <p>Kindly click the following link to change your password</p>
        <a href="http://localhost:5173/changePass/${email}">Change Password</a>
      </body>
    </html>
  `,
  });

  console.log("Message sent: %s", info.messageId);
  
}