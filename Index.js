const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("src"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.post("/", (req, res) => {
  res.send(req.body);
  // console.log(req.body);

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.email,
  //     pass: process.env.password + "#",
  //   },
  // });
  // const mailOptions = {
  //   from: req.body.Email,
  //   to: "evan.woods.dev@gmail.com",
  //   subject: `Enquiry from ${req.body.FirstName} ${req.body.LastName}`,
  //   text: req.body.Message,
  // };

  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     console.log(`Email sent! ${info.response}`);
  //     res.send("Success");
  //   }
  // });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
