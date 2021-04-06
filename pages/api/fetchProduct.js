// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const getPosts = async () => {
//   const url = `https://api.buttercms.com/v2/content/products/?auth_token=${process.env.API_TOKEN}`;
//   const res = await fetch(url);
//   const { data } = await res.json();
//   const allProducts = data.products;
//   return allProducts;
// };

// export default async (req, res) => {
//   const response = await getPosts();

//   const products = response.map((prod) => {
//     return {
//       name: prod.fields.name,
//       id: prod.fields.id,
//       image: prod.fields.image.url,
//       price: prod.fields.price,
//       description: prod.fields.description,
//     };
//   });

//   return res.status(200).json(products);
// };

export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
