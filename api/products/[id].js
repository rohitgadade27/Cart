const products = [ /* same product array */ ];

export default function handler(req, res) {
  const { id } = req.query;
  const product = products.find(p => p.id.toString() === id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
}
