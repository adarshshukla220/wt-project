import { Hono } from "hono";

import { Product } from "../db/models/Products.js";

const products = new Hono();

/*
  GET /products

  Get all products
*/
products.get("/", async (c) => {
  try {
    const data = await Product.find();

    return c.json(data);
  } catch (error) {
    console.error(error);

    return c.json(
      {
        message: "Failed to fetch products",
      },
      500,
    );
  }
});

/*
  GET /products/:id

  Get single product
*/
products.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");

    const product = await Product.findById(id);

    if (!product) {
      return c.json(
        {
          message: "Product not found",
        },
        404,
      );
    }

    return c.json(product);
  } catch (error) {
    console.error(error);

    return c.json(
      {
        message: "Invalid product ID",
      },
      400,
    );
  }
});

/*
  POST /products

  Create product
*/
products.post("/", async (c) => {
  try {
    const body = await c.req.json();

    const product = await Product.create(body);

    return c.json(product, 201);
  } catch (error) {
    console.error(error);

    return c.json(
      {
        message: "Failed to create product",
      },
      400,
    );
  }
});

export default products;