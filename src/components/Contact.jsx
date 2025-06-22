import { FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-700 to-gray-600 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Contact Me
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 mb-4">
          Have a project or just want to say hi? I'm open to freelance and full-time opportunities.
        </p>
        <p className="text-xl sm:text-2xl text-purple-400 font-semibold mb-4">
  📧 <a href="mailto:mail2anbumanir@gmail.com" className="hover:underline">mail2anbumanir@gmail.com</a>
</p>
        <p className="text-xl sm:text-2xl text-purple-400 font-semibold mb-4 flex items-center justify-center">
          <FaPhoneAlt className="mr-2" /> +91 7868987386
        </p>
        <div className="flex justify-center items-center space-x-6 mt-6">
          <a
            href="www.linkedin.com/in/anbumani-ramalingam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-500 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}