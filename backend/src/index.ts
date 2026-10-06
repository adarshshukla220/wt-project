import "dotenv/config";

import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";

import connectDB from "./db/mongoose.connection.js";
import products from "./router/product.routes.js";

const app = new Hono();

await connectDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use(
  "*",
  cors({
    origin:"https://shop.adarshshukla.cc.cd",
  }),
);

app.get("/", (c) => {
  return c.json({
    message: "Amazon Clone API",
  });
});

app.route("/products", products);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
  hostname: "0.0.0.0",
});

console.log("Server running");
