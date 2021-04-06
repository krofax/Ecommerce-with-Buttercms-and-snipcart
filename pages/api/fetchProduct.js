const getPosts = async () => {
  const url = `https://api.buttercms.com/v2/content/products/?auth_token=${process.env.API_TOKEN}`;
  const res = await fetch(url);
  const { data } = await res.json();
  const allProducts = data.products;
  return allProducts;
};

export default async (req, res) => {
  const response = await getPosts();
  const fetchProduct = response.map((prod) => {
    return {
      name: prod.name,
      id: prod.id,
      image: prod.image,
      price: prod.price,
      description: prod.description,
    };
  });

  return res.status(200).json(fetchProduct);
};


