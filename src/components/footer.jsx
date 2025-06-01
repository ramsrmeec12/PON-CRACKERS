import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-yellow-400">Pon Crackers</h2>
          <p className="text-sm mt-1">© 2025 Pon Crackers. All rights reserved.</p>
        </div>

        <nav className="flex space-x-6 text-sm">
          
          <a href="#about" className="hover:text-yellow-400 transition">About Us</a>
          <a href="#products" className="hover:text-yellow-400 transition">Products</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        <div className="flex space-x-4 text-yellow-400 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-300 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-300 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-300 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
