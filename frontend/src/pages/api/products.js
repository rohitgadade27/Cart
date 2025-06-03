import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Construct absolute path to products.json one folder up
    const jsonPath = path.join(process.cwd(), '../products.json');
    
    // Read file
    const fileContents = await fs.readFile(jsonPath, 'utf8');

    // Parse JSON data
    const products = JSON.parse(fileContents);

    // Return JSON response
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to read products.json:', error);
    res.status(500).json({ error: 'Failed to load products data' });
  }
}
