import { products } from "./dummy";
export default (req, res) => {
  res.statusCode = 200;
  res.json(products);
};
