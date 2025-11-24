import 'dotenv/config';
import AWS from "aws-sdk";
import cors from "cors";
import express from "express";
//import serverless from "serverless-http"; // wrap Express for Lambda

// ----- Server setup -----
const app = express();
app.use(cors());

// ----- DynamoDB setup -----
const dynamo = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// ----- Helper function -----
async function getProducts() {
  try {
    const data = await dynamo.scan({ TableName: "Products" }).promise();
    return data.Items; // returns array of products from DynamoDB
  } catch (err) {
    console.error("Error fetching products from DynamoDB:", err);
    return []; // fallback: return empty array
  }
}

// ----- Routes -----
app.get("/products", async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

// export the handler for Lambda
//export const handler = serverless(app);

// ----- Start server on EC2 -----
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
