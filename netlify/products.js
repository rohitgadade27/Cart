const path = require('path');
const fs = require('fs').promises;

exports.handler = async function(event, context) {
  try {
    const jsonPath = path.join(__dirname, '../../backend/data/products.json'); // Adjust if your JSON is elsewhere
    const data = await fs.readFile(jsonPath, 'utf8');
    const products = JSON.parse(data);

    return {
      statusCode: 200,
      body: JSON.stringify(products),
      headers: {
        'Content-Type': 'application/json',
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load products data' }),
    };
  }
};
