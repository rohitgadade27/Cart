const path = require('path');
const fs = require('fs').promises;

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // In Vercel's serverless environment, we need to use the absolute path
    const jsonPath = path.join(process.cwd(), 'frontend', 'products.json');
    console.log('Attempting to read from:', jsonPath); // Debug log
    
    const fileContents = await fs.readFile(jsonPath, 'utf8');
    const products = JSON.parse(fileContents);
    
    // Set cache control headers
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    res.setHeader('Content-Type', 'application/json');
    
    res.status(200).json(products);
  } catch (error) {
    console.error('Error loading products:', error);
    res.status(500).json({ 
      error: 'Failed to load products data',
      details: error.message,
      path: path.join(process.cwd(), 'frontend', 'products.json')
    });
  }
}; 