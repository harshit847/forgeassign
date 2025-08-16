import { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen bg-white text-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch ✨</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-300 transition"
          >
            Send Message 📩
          </button>
        </form>
      </div>
    </section>
  );
}
