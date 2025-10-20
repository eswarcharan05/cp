import { Link } from 'react-router-dom';
import { FaShieldAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl backdrop-blur-lg">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 py-5 relative">
        <Link to="/" className="group flex items-center gap-3 hover:opacity-90 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <FaShieldAlt className="text-3xl md:text-4xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Privacy Sentinel
            </h1>
            <p className="text-xs md:text-sm text-white/90 mt-0.5 font-medium">
              Your guide to digital privacy
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
