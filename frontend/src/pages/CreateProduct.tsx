import { useState } from "react";

import { createProduct } from "@/services/product";

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
      [event.target.name]: event.target.value,
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
    <main
      style={{
        minHeight: "calc(100vh - 64px)",
        background: "#f5f5f5",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "12px",
          padding: "32px",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            fontSize: "28px",
          }}
        >
          Create Product
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <label>
            Product Name

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="iPhone 17"
              required
              style={inputStyle}
            />
          </label>

          <label>
            Description

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Product description..."
              rows={5}
              required
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </label>

          <label>
            Price

            <input
              name="price"
              type="number"
              min="0"
              value={form.price}
              onChange={handleChange}
              placeholder="99999"
              required
              style={inputStyle}
            />
          </label>

          <label>
            Image URL

            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              required
              style={inputStyle}
            />
          </label>

          <label>
            Category

            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Electronics"
              required
              style={inputStyle}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "7px",
              background: "#111827",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {loading
              ? "Creating..."
              : "Create Product"}
          </button>

          {message && (
            <p
              style={{
                textAlign: "center",
                color: "#525252",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  marginTop: "7px",
  padding: "11px 12px",
  border: "1px solid #d4d4d4",
  borderRadius: "7px",
  outline: "none",
  background: "#fff",
};

export default CreateProduct;