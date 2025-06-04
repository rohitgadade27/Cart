const path = require('path');
const fs = require('fs');

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
    // Try multiple possible paths
    const possiblePaths = [
      path.join(process.cwd(), 'frontend', 'products.json'),
      path.join(process.cwd(), 'products.json'),
      path.join(__dirname, 'products.json'),
      path.join(__dirname, '..', 'products.json')
    ];

    let fileContents = null;
    let usedPath = null;

    for (const filePath of possiblePaths) {
      try {
        console.log('Trying to read from:', filePath);
        if (fs.existsSync(filePath)) {
          fileContents = fs.readFileSync(filePath, 'utf8');
          usedPath = filePath;
          break;
        }
      } catch (err) {
        console.log('Failed to read from:', filePath, err.message);
      }
    }

    if (!fileContents) {
      throw new Error('Could not find products.json in any of the expected locations');
    }

    console.log('Successfully read from:', usedPath);
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
      stack: error.stack,
      cwd: process.cwd(),
      dirname: __dirname
    });
  }
}; 