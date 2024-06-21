const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.region,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});

const dynamoDbClient = new AWS.DynamoDB();
const dynamoDbDocClient = new AWS.DynamoDB.DocumentClient({ region: process.env.region });
const tableName = 'categories';

const fetchTableDetails = async () => {
    try {
        const categoryId = '2'; // Assuming userId is a string

        console.log("Fetching item with userId:", userId);

        // Using DynamoDB Document Client
        const getParams = {
            TableName: tableName,
            Key: {
                categoryId: categoryId
            }
        };

        console.log("GetParams:", getParams);

        const item = await dynamoDbDocClient.get(getParams).promise();
        console.log("Item Details (Document Client):", item.Item);

        // Using DynamoDB Client
        const describeTableParams = {
            TableName: tableName
        };
        const tableDetails = await dynamoDbClient.describeTable(describeTableParams).promise();
        console.log("Table Details (DynamoDB Client):", tableDetails);
    } catch (error) {
        console.error("Error fetching table details:", error);
    }
};

fetchTableDetails();
