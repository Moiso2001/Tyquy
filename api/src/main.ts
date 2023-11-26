import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { getS3Object } from "./controllers/S3"
import { sendWhatsappMessage } from "./controllers/twilio";

import { sendEmail } from "./controllers/mailer/mailer";

const app = express()
dotenv.config()

const port = process.env.PORT || 3001

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
  
  /* Middleware */
app.use(cors(corsOptions));
app.use(express.json());

/* Routes */
app.get('/photo/:id', async (req, res) => {
    const photoId = req.params.id;
    
    const {error, message, object} = await getS3Object(photoId);

    if(error){
        res.status(500).send(message);
        return
    }

    if(object){
        console.log(1, object)
    }
});

app.post('/email', async (req, res) => {
    const body = req.body

    try {
        await sendEmail(body)

        res.send('Alright email')
    } catch (error) {
        console.error(error)
    }
})

app.post('/message', async (req, res) => {
    const body = req.body

    try {
        sendWhatsappMessage(body)   

        res.send('Alright')
    } catch (error) {
        console.log('aqui fue el error', error)
        res.status(500).send('NoAlright')
    }
})


/* Run Server */  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});