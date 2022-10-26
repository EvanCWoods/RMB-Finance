const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
  );

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../Client/build/index.html"));
});

app.post("/", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  console.log(transporter);
  console.log(req.body);

  const mailOptions = {
    from: "evan.woods.dev@gmail.com",
    to: "ryan@rmb-finance.com.au",
    subject: `Enquiry from ${req.body.FirstName} ${req.body.LastName}`,
    text: req.body.Message,
  };

  console.log(mailOptions);

  const response = await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(err);
    } else {
      console.log(`Email sent! ${info.response}`);
      res.send("Success");
    }
  });
  console.log(response);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
