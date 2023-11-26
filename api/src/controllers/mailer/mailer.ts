import nodemailer from "nodemailer"
import { FormType } from "../../types/global";
import { getBody } from "./body-email";

const testAccount = {
    user: 'moises.espanglish@gmail.com',
    pass: 'bjuipbkquchyhone'
}

  // create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
});

transporter.verify()
    .then(() => {
        console.log('Ready to send emails')
    })
    .catch((err) => {
        console.log(err)
    })

export async function sendEmail(formData: FormType) {
    try {
        await transporter.sendMail({                
        from: '"Tyquy Cotizacion" <admin@tyqubayara.com>', // sender address
        // to: 'Tyquybayarapet@gmail.com', // list of receivers
        to: "tyquybayarapet@gmail.com",
        subject: `${formData.first.nombre} - Cotizacion Tyquy`, // Subject line
        html: getBody(formData)
    })
    } catch (error) {
        console.error(error)
    }
}