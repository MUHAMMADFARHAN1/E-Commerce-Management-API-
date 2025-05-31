import Order from "../../models/Orders.js";





export const createProduct = async (request, response) => {
    try {
      let { name, description, price, quantity, createdAt } = request.body;
      let userId = request.headers.authorization;
      // I check if user is authorized
      if (!userId) return response.status(401).send("Unauthorized");
      // I generate slug from title
      // let slug =  name.replaceAll(" ", "-").toLowerCase() + "-" + new Date().getTime();
      // I create the product
      await Product.create({
        name,
        description,
        price,
        // slug,
        quantity,
        createdAt,
      });
      response.status(201).send(`Product created successfully`);
    } catch (error) {
      console.log(error.message);
      response.status(500).send("Server Error");
    }
  };