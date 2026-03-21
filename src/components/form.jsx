import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    package: "Basic",
    product: "Standing Tall Pack",
    price: "25000",
  });

  const packageMap = {
    Basic: { product: "Standing Tall Pack", price: "25000" },
    Home: { product: "Heaven is Home Pack", price: "38000" },
    Complete: { product: "Goodnight Kiss Pack", price: "48000" },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "package") {
      setFormData((prev) => ({
        ...prev,
        package: value,
        product: packageMap[value].product,
        price: packageMap[value].price,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        navigate("/thankyou");
      } else {
        setMessage("❌ Failed to submit. Try again.");
      }
    } catch {
      setMessage("⚠️ Network error. Try later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-3xl p-8 flex flex-col gap-4"
    >
      {["name", "phone", "email", "address", "state"].map((field) => (
        <input
          key={field}
          name={field}
          required
          placeholder={field.toUpperCase()}
          value={formData[field]}
          onChange={handleChange}
          className="px-4 py-3 rounded-full border"
        />
      ))}

      <select
        name="package"
        value={formData.package}
        onChange={handleChange}
        className="px-4 py-3 rounded-full border"
      >
        <option value="Basic">Standing Tall Pack</option>
        <option value="Home">Heaven is Home Pack</option>
        <option value="Complete">Goodnight Kiss Pack</option>
      </select>

      <p className="text-sm text-gray-600">
        Selected: {formData.product} — ₦{formData.price}
      </p>

      <button
        disabled={isSending}
        className="py-3 rounded-full bg-purple-600 text-white font-semibold"
      >
        {isSending ? "Sending..." : "Place Order"}
      </button>

      {message && <p className="text-sm text-red-600">{message}</p>}
    </form>
  );
}
