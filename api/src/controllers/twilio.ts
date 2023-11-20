import twilio from "twilio"
import dotenv from "dotenv"

import { FormType } from "../types/global";

dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken); 

export function sendWhatsappMessage(form: FormType) {
    client.messages
        .create({
            body: getBody(form),
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+573209260621'
        })
        .then((message) => console.log(message.sid))
        .catch((err)  => console.log(err))
        .finally(() => console.log('Success'));
}

function getBody (form: FormType): string {
    const dogsLines = form.receipt.dogs.map(dog => {return `-Plan: ${dog.line} - ${dog.price}COP`})

    const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'America/Bogota',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
    
    return `---SOLICITUD REGISTRO TYQUY---\n
    --Dueño--
    -Nombre: ${form.first.nombre}
    -Celular: ${form.first.celular} - Click wa.me/57${form.first.celular}
    -Correo: ${form.first.correo}
    -Direccion: ${form.first.direccion}\n

    --Mascota(s)--
    ${dogsLines.join('\n')}\n\n

    --Total--
    -Total: ${form.receipt.total}COP
    -Plan: ${form.receipt.title}\n\n

    *Fecha de registro: ${timestamp}*
    `;
}