import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaShieldAlt, FaLock, FaUserShield, FaEye, FaCheckCircle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// Import data to count guides
// --- FIX: Changed paths from './data/...' to '../data/...' ---
import whatsappData from '../data/whatsapp.json';
import instagramData from '../data/instagram.json';
import facebookData from '../data/facebook.json';
import xData from '../data/x.json';
// --- END FIX ---

const Home = () => {
  // Calculate total guides dynamically
  const totalGuides = whatsappData.guides.length + instagramData.guides.length + facebookData.guides.length + xData.guides.length;

  const platforms = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      color: '#25D366',
      path: '/guides/whatsapp',
      description: `${whatsappData.guides.length} privacy guides`, // Dynamic count
      bgGradient: 'from-green-400 to-green-600'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      color: '#E1306C',
      path: '/guides/instagram',
      description: `${instagramData.guides.length} privacy guides`, // Dynamic count
      bgGradient: 'from-pink-500 via-purple-500 to-purple-600'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      color: '#1877F2',
      path: '/guides/facebook',
      description: `${facebookData.guides.length} privacy guides`, // Dynamic count
      bgGradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      color: '#000000',
      path: '/guides/x',
      description: `${xData.guides.length} privacy guides`, // Dynamic count
      bgGradient: 'from-gray-800 to-black'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 animate-fade-in">
              <FaShieldAlt className="text-blue-600" />
              {/* Total guides is now dynamic */}
              <span className="text-sm font-medium text-gray-700">{totalGuides} Privacy Guides Available</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-up">
              Take Control of Your Privacy
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up-delay">
              Master your privacy settings across WhatsApp, Instagram, Facebook, and X with our comprehensive step-by-step guides.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-md">
                <FaCheckCircle className="text-green-500" />
                <span className="font-medium text-gray-700">Easy to Follow</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-md">
                <FaCheckCircle className="text-green-500" />
                <span className="font-medium text-gray-700">Always Updated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-md">
                <FaCheckCircle className="text-green-500" />
                <span className="font-medium text-gray-700">100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Choose Your Platform
          </h3>
          <p className="text-lg text-gray-600">
            Select a platform to explore privacy guides
          </p>
        </div>

        {/* This ID allows the Header link to work */}
        <div id="platforms" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Link
                key={platform.name}
                to={platform.path}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative bg-gradient-to-br ${platform.bgGradient} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8 text-white h-full overflow-hidden animate-card-appear`}>
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-7 mb-5 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon className="text-6xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">{platform.name}</h3>
                    <p className="text-sm opacity-90 mb-4">{platform.description}</p>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-semibold group-hover:bg-white/30 transition-all group-hover:gap-3">
                      <span>Explore Guides</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why Privacy Matters Section (No changes needed) */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-12 border border-white">
            <div className="text-center mb-10">
              <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Why Privacy Matters</h3>
              <p className="text-gray-600 text-lg">Your digital safety is our priority</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-xl p-3 group-hover:scale-110 transition-transform">
                    <FaLock className="text-2xl text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Protect Your Data</h4>
                    <p className="text-gray-600">Safeguard your personal information from unauthorized access and data breaches.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-xl p-3 group-hover:scale-110 transition-transform">
                    <FaUserShield className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Control Your Info</h4>
                    <p className="text-gray-600">Decide what information is shared with advertisers and third parties.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-xl p-3 group-hover:scale-110 transition-transform">
                    <FaEye className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Manage Visibility</h4>
                    <p className="text-gray-600">Choose who can see your posts, photos, and online activity.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-xl p-3 group-hover:scale-110 transition-transform">
                    <FaShieldAlt className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Stay Secure</h4>
                    <p className="text-gray-600">Reduce risks of identity theft, harassment, and unwanted contact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;