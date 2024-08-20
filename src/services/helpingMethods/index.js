import AsyncStorage from '@react-native-async-storage/async-storage'
import Snackbar from 'react-native-snackbar';
// import { decode } from 'base64-arraybuffer'
// import { S3 } from 'aws-sdk'
// var fs = require('react-native-fs');
// import NetInfo from "@react-native-community/netinfo";

export default class NetworkUtils {
    static async isNetworkAvailable() {
        const response = await NetInfo.fetch();
        return response.isConnected;
    }
}
export const storeDataToStorage = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}

export const removeDataFromStorage = async (key) => {
    await AsyncStorage.removeItem(key)
}

export const getDataFromStorage = async (value) => {
    let data = await AsyncStorage.getItem(value)
    let newData = JSON.parse(data)
    return newData
}

export const GreenSnackbar = text => {
    Snackbar.show({
        text: text,
        duration: Snackbar.LENGTH_SHORT,
        textColor: '#fff',
        backgroundColor: '#4BB543',
    });
};

export const RedSnackbar = text => {
    Snackbar.show({
        text: text,
        duration: Snackbar.LENGTH_SHORT,
        textColor: '#fff',
        backgroundColor: 'red',
    });
};

export const uploadImageOnS3 = async (file, successPath) => {
    const s3bucket = new S3({
        region: 'us-east-2',
        accessKeyId: 'AKIASZQZ2QP4ZJHAHNS5',
        secretAccessKey: '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',
        Bucket: "alpha-equipment-bucket",
        signatureVersion: 'v4',
    });
    let contentType = 'image/jpeg';
    let contentDeposition = 'inline;filename="' + file.name + '"';
    const base64 = await fs.readFile(file.path, 'base64');
    const arrayBuffer = decode(base64);
    s3bucket.createBucket(async () => {
        const params = {
            Bucket: "alpha-equipment-bucket",
            Key: file.name,
            Body: arrayBuffer,
            ContentDisposition: contentDeposition,
            ContentType: contentType,
        };
        await s3bucket.upload(params).promise()
            .then((data) => {
                successPath(data.Location)
            })
            .catch((err) => {
                console.log(err)
            })
    });
}






