import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"; // Icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccess("Thank you for reaching out! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
         
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Have questions? We're here to help! Reach out via email, phone, or visit us at our office.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 dark:text-blue-400" />
                <p className="text-gray-700 dark:text-gray-300">contact@example.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600 dark:text-blue-400" />
                <p className="text-gray-700 dark:text-gray-300">+1 234 567 890</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600 dark:text-blue-400" />
                <p className="text-gray-700 dark:text-gray-300">123 Street, City, Country</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            {success && (
              <p className="text-green-600 text-center mb-4">{success}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
