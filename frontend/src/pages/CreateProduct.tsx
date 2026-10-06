import { useState } from "react";

import { createProduct } from "@/services/product";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

const CreateProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value,
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      await createProduct({
        name: form.name,
        description: form.description,
        price: Number(form.price),
        image: form.image,
        category: form.category,
      });

      setMessage(
        "Product created successfully!",
      );

      setForm({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
      });
    } catch (error) {
      console.error(error);

      setMessage(
        "Failed to create product.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-muted/40 px-6 py-12">

      <div className="mx-auto max-w-2xl">

        <Card>

          <CardHeader>
            <CardTitle className="text-2xl">
              Create Product
            </CardTitle>
          </CardHeader>

          <CardContent>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="space-y-2">

                <Label htmlFor="name">
                  Product Name
                </Label>

                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="iPhone 17"
                  required
                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="description">
                  Description
                </Label>

                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Product description..."
                  rows={5}
                  required
                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="price">
                  Price
                </Label>

                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="99999"
                  required
                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="image">
                  Image URL
                </Label>

                <Input
                  id="image"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://..."
                  required
                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="category">
                  Category
                </Label>

                <Input
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Electronics"
                  required
                />

              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading
                  ? "Creating..."
                  : "Create Product"}
              </Button>

              {message && (
                <p className="text-center text-sm text-muted-foreground">
                  {message}
                </p>
              )}

            </form>

          </CardContent>

        </Card>

      </div>

    </main>
  );
};

export default CreateProduct;