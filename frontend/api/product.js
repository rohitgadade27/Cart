import products from './products/productsData';

export default function handler(req, res) {
  // Block all caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('Vary', '*');
  
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
    res.setHeader('Content-Type', 'application/json');
    const { id } = req.query;
    if (!id) {
      res.status(400).json({ error: 'Product ID is required' });
      return;
    }
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found', details: `No product found with ID ${id}` });
    }
  } catch (error) {
    console.error('Error serving product:', error);
    res.status(500).json({ 
      error: 'Failed to serve product data',
      details: error.message
    });
  }
} 