import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaSearch, FaArrowLeft, FaTimes } from 'react-icons/fa';
import GuideCard from '../components/GuideCard';
import whatsappData from '../data/whatsapp.json';
import instagramData from '../data/instagram.json';
import facebookData from '../data/facebook.json';
import xData from '../data/x.json';

const PlatformGuides = () => {
  const { platform } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Guides');

  const platformData = {
    whatsapp: whatsappData,
    instagram: instagramData,
    facebook: facebookData,
    x: xData
  };

  const data = platformData[platform];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Platform not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  // UPDATED: Get categories dynamically from the guides
  const categories = useMemo(() => {
    const allCategories = data.guides.map(guide => guide.category);
    return ['All Guides', ...new Set(allCategories)];
  }, [data.guides]);

  const filteredGuides = useMemo(() => {
    return data.guides.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           guide.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Guides' || guide.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [data.guides, searchQuery, selectedCategory]);

  // --- NEW LOGIC ---
  const platformColor = data.color;
  const isGradient = platformColor.startsWith('linear-gradient');
  
  // Style object for all colored elements
  const colorStyle = isGradient 
    ? { backgroundImage: platformColor } 
    : { backgroundColor: platformColor };

  // Style for active buttons (adds border logic)
  const activeButtonStyle = isGradient
    ? { backgroundImage: platformColor, borderColor: 'transparent' }
    : { backgroundColor: platformColor, borderColor: platformColor };
  // --- END NEW LOGIC ---

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Platform Header (now data-driven) */}
      <div 
        style={colorStyle} 
        className="text-white py-16 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-all bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/20">
            <FaArrowLeft className="text-sm" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 drop-shadow-lg">{data.platform} Privacy Guides</h1>
            <p className="text-lg md:text-xl opacity-95 font-medium">{data.guides.length} comprehensive guides to protect your privacy</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Search Bar */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch className="text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search guides by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-14 py-5 rounded-2xl shadow-lg border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-lg bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (now data-driven) */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-3 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap border-2 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-gray-200 hover:border-gray-300 hover:scale-105'
                }`}
                style={selectedCategory === category ? activeButtonStyle : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-700 font-semibold text-lg">
            {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'} found
          </p>
          {searchQuery && (
            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              Searching for: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Guide Cards Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide, index) => (
              <div key={guide.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                {/* Your new GuideCard component is used here */}
                <GuideCard guide={guide} platformColor={platformColor} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-3xl shadow-lg p-12 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl font-bold text-gray-800 mb-3">No guides found</p>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Guides');
                }}
                className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                style={colorStyle} // Button now supports gradients
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformGuides;