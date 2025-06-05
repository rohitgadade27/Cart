import { products } from './data';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // If the products array is exported from [id].js, import and return it
    // Otherwise, copy the products array here
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 