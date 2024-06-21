require('dotenv').config();

const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.region,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});

const dynamoDbClient = new AWS.DynamoDB()

const dynamoDbDocClient = new AWS.DynamoDB.DocumentClient({ region: process.env.region })

const tableName = 'transactions';
const userTable = 'user'
// let region = process.env.region;
// console.log(region);

module.exports = {
    dynamoDbClient,
    dynamoDbDocClient,
    tableName,
    userTable
};
