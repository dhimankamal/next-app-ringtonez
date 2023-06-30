// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Transporter } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

type Data = {
  info?: unknown;
  error?: Error;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let nodemailer = require("nodemailer");
  const transporter: Transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.hostinger.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    secure: true,
  });
  const mailData: MailOptions = {
    from: "no-reply@ringtonez.in",
    to: "contact@ringtonez.in",
    subject: `Message From ${req.body.subject}`,
    text: req.body.comments,
    html:
      "Name - " +
      req.body.name +
      "<br /> email - " +
      req.body.email +
      "<br /> message - " +
      req.body.comments,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      const mailOptions: MailOptions = {
        from: "Ringtonez<no-reply@ringtonez.in>",
        to: req.body.email,
        subject: `Contact Ringtonez`,
        text: "Contact Ringtonez",
        html: `<b> Thanks for being awesome! </b><br />
            We have received your message and would like to thank you for writing to us. We will reply by email as soon as possible.<br /> <br />
        Talk to you soon, Ringtonez <br />
        Contact us <br />
        Email - contact@ringtonez.in
        `,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.status(200).json({ info });
        }
      });
    }
  });
}
