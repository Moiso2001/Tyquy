import express from "express"
import { getS3Object, postS3Object } from "./controllers/S3"
import { sendWhatsappMessage } from "./controllers/twilio";

import cors from "cors"

const app = express()
const port = 3001

/* Middleware */
app.use(cors())
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