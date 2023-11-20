import { GetObjectCommandOutput, PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import dotenv from "dotenv"

import fs from "fs";

/* Definition */
type getResponse = {
    error: boolean,
    message: string
    object?: GetObjectCommandOutput
}

/* Load .env variables */
dotenv.config()


const bucketName = process.env.AWS_BUCKET_NAME || ''
const region = process.env.AWS_BUCKET_REGION || ''
const accessKeyId = process.env.AWS_ACCESS_KEY || ''
const secretAccessKey = process.env.AWS_SECRET_KEY || ''


/* AWS SDK implementation */
const s3 = new S3({
    region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    }
})

/* Get Photo Function */
export const getS3Object = async (photoId: string): Promise<getResponse> => {
    try {
        const downloadParams = {
            Bucket: bucketName,
            Key: `tyquy.jpg`
        }

        const object = await s3.getObject(downloadParams);

        return { error: false, message: 'Object retrieved successfully', object };
    } catch (error) {
        console.error('Error retrieving S3 object:', error);
        return { error: true, message: 'Failed to retrieve S3 object', object: undefined };
    }
}

/* Post Photo Function */
export const postS3Object = async () => {
    // const fileStream = fs.createReadStream(file.path);

    // const uploadParams = {
    //     Bucket: bucketName,
    //     Body: fileStream,
    //     Key: file.filename,
    //     UploadId: '',
    //     PartNumber: 0,
    // }

    // return s3.uploadPart(uploadParams)
    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: 'hellotyquy.txt',
        Body: 'Hello Tyquy!'
    })

    try {
        const response = await s3.send(command);
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}