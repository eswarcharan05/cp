import { Link } from 'react-router-dom';
import { FaArrowRight, FaList } from 'react-icons/fa';

const GuideCard = ({ guide, platformColor }) => {
  const priorityStyles = {
    'Critical': 'bg-gradient-to-r from-red-50 to-red-100 text-red-800 border-red-300 shadow-sm',
    'High Priority': 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 border-orange-300 shadow-sm',
    'Important': 'bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-800 border-yellow-300 shadow-sm',
  };

  const priorityDots = {
    'Critical': '🔴', // Using emoji for compatibility
    'High Priority': '🟠', // Using emoji for compatibility
    'Important': '🟡', // Using emoji for compatibility
  };

  // --- NEW LOGIC ---
  // Check if the color is a gradient string
  const isGradient = platformColor.startsWith('linear-gradient');
  
  // Create a style object for elements that use the platform color
  const colorStyle = isGradient 
    ? { backgroundImage: platformColor } 
    : { backgroundColor: platformColor };
  // --- END NEW LOGIC ---

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
      {/* Top accent bar now supports gradients */}
      <div 
        className="h-2 w-full"
        style={colorStyle}
      ></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 flex-1 leading-tight group-hover:text-gray-900 transition-colors">
            {guide.title}
          </h3>
          <span 
            className={`text-xs px-3 py-1.5 rounded-full font-semibold border-2 whitespace-nowrap ml-2 ${priorityStyles[guide.priority]}`}
          >
            {priorityDots[guide.priority]} {guide.priority}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {guide.description}
        </p>
        
        <div className="flex items-center justify-between mb-5 text-xs">
          <span className="text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-xl font-medium border border-gray-200">
            📂 {guide.category} {/* Using emoji for compatibility */}
          </span>
          <span className="flex items-center gap-1.5 text-gray-600 font-medium">
            <FaList className="text-xs" />
            {guide.steps.length} steps
          </span>
        </div>
        
        <Link 
          to={`/guide/${guide.id}`}
          className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          // Button now supports gradients
          style={{ 
            ...colorStyle,
            color: 'white'
          }}
        >
          <span>View Guide</span>
          <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default GuideCard;