const products = [ /* your hardcoded product array */ ];

export default function handler(req, res) {
  res.status(200).json(products);
}
