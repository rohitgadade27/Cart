import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    const jsonDirectory = path.join(process.cwd(), '..');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'products.json'), 'utf8');
    const products = JSON.parse(fileContents);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load products data' });
  }
}
