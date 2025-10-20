import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PlatformGuides from './pages/PlatformGuides';
import GuideDetail from './pages/GuideDetail';

// Import data to count guides
import whatsappData from './data/whatsapp.json';
import instagramData from './data/instagram.json';
import facebookData from './data/facebook.json';
import xData from './data/x.json';

function App() {
  return (
    <Router>
      {/* Your new header looks great and is sticky */}
      <Header />
      <div className="min-h-screen flex flex-col">
        {/* The main content area will grow to fill the space */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides/:platform" element={<PlatformGuides />} />
            <Route path="/guide/:guideId" element={<GuideDetail />} />
          </Routes>
        </main>
        
        {/* UPDATED FOOTER */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-auto border-t-4 border-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-3xl">🛡️</span>
                    <span>Privacy Sentinel</span>
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Your comprehensive guide to protecting your privacy across social media platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                    <li className="hover:text-white transition-colors cursor-pointer">All Platforms</li>
                    <li className="hover:text-white transition-colors cursor-pointer">About</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-lg">Coverage</h4>
                  {/* These counts are now dynamic from your JSON files */}
                  <ul className="space-y-2 text-gray-400">
                    <li>🟢 WhatsApp - {whatsappData.guides.length} guides</li>
                    <li>🟣 Instagram - {instagramData.guides.length} guides</li>
                    <li>🔵 Facebook - {facebookData.guides.length} guides</li>
                    <li>⚫ X (Twitter) - {xData.guides.length} guides</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-6 text-center">
                <p className="text-sm text-gray-400 mb-2">
                  © 2025 Privacy Sentinel. All rights reserved. Your privacy matters.
                </p>
                <p className="text-xs text-gray-500">
                  Educational resource for privacy protection. Settings may change - always verify current platform settings.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;