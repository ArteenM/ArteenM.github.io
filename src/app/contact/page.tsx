export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1>
      <p className="text-gray-700 text-center mb-6">
        Feel free to reach out! You can contact me through the form below or via
        social media.
      </p>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://github.com/ArteenM"
          target="_blank"
          className="text-gray-500 hover:text-gray-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/arteen-mohammadi-77977631a"
          target="_blank"
          className="text-gray-500 hover:text-gray-200"
        >
          LinkedIn
        </a>
        <a
          href="mailto:arteenmo1@gmail.com"
          className="text-gray-500 hover:text-gray-200"
        >
          Email
        </a>
        <a
          href="https://x.com/arteenmo1"
          target="_blank"
          className="text-gray-500 hover:text-gray-200"
        >
          Twitter
        </a>
      </div>

      {/* Contact Form */}
      <form
        action="https://formsubmit.co/3c68c8d96be3c88ec4b16e4e24b0d358"
        method="POST"
        className="bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
