import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "95fc8aa0bd118d",
      pass: "c510bc16f954e3"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
        from: 'Equipe feedget<oi@feedget.com>',
        to: 'alanaguiar01@gmail.com',
        subject,
        html: body
    })
    }
}

