//nodemailer requiring here as nodemailer var
const nodemailer = require("nodemailer");

//rendering home page
exports.home = (req, res) => {
  res.render("home");
};

//rendering response when message is sent
exports.message = (req, res) => {
  const output = `
        <p>New message</p>
        <h3>Contact Details</h3>
        <ul>
            <li>${req.body.name}</li>
            <li>${req.body.email}</li>
            <li>${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;
  // create reusable transporter object using the default SMTP transport
  //here comes sender information, createTransport accepts object inside
  let tansporter = nodemailer.createTransport({
    host: "mail.jafferytech.com",
    port: 465,
    secure: true, //true for 465 if SSL is used
    auth: {
      user: "message@jafferytech.com",
      pass: "*!3XIers",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  //mail options are definced here
  let mailOption = {
    from: '"Jaffery Tech" <message@jafferytech.com>',
    to: "jaffery@jafferytech.com",
    subject: "Message from portfolio website",
    text: "",
    html: output,
  };

  //send mail with defined transport object
  tansporter.sendMail(mailOption, (error, info) => {
    if (error) {
      res.send("failmessage");
      return console.log(error);
    }
    console.log("message sent: %s", info.messageId);
    //preview oly availabel when sending throught ethereal acc
    console.log("preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("message");
  });
};
