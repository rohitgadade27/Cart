import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Resolve path to products.json one level up from api folder
    const filePath = path.join(process.cwd(), 'products.json'); // points to shopping-cart/products.json
    const jsonData = await fs.readFile(filePath, 'utf8');
    const products = JSON.parse(jsonData);

    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to load products.json:', error);
    res.status(500).json({ error: 'Failed to load products data' });
  }
}
