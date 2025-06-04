const path = require('path');
const fs = require('fs').promises;

exports.handler = async function(event, context) {
  try {
    const jsonDirectory = path.join(process.cwd(), '..');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'products.json'), 'utf8');
    const products = JSON.parse(fileContents);

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
