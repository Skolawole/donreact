import { navItems } from "../constants";

const Footer = () => {
  return (
    <footer className=" text-white px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo or Brand */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Doncrown</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Vkings All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact or Newsletter (Optional) */}
        <div>
          <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-2">Email: info@vkings.com</p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        Built with ❤️ using React & TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;
