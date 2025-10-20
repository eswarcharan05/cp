import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaInfoCircle, FaList } from 'react-icons/fa';
import whatsappData from '../data/whatsapp.json';
import instagramData from '../data/instagram.json';
import facebookData from '../data/facebook.json';
import xData from '../data/x.json';

// Helper function to get image URL from public folder
const getImageUrl = (platformName, imageName) => {
  return `/images/${platformName}/${imageName}`;
};

const GuideDetail = () => {
  const { guideId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const allData = [whatsappData, instagramData, facebookData, xData];
  
  let guide = null;
  let platformData = null;
  let platformName = '';

  for (const data of allData) {
    const foundGuide = data.guides.find(g => g.id === guideId);
    if (foundGuide) {
      guide = foundGuide;
      platformData = data;
      platformName = data.platform.toLowerCase().replace(/\s+/g, '-').replace('(', '').replace(')', '');
      if (platformName === 'x-twitter') platformName = 'x';
      break;
    }
  }

  useEffect(() => {
    setCurrentStep(0);
  }, [guideId]);

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Guide not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const currentStepData = guide.steps[currentStep];
  const totalSteps = guide.steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // --- NEW LOGIC ---
  const platformColor = platformData.color;
  const isGradient = platformColor.startsWith('linear-gradient');

  // Style object for solid/gradient elements
  const colorStyle = isGradient 
    ? { backgroundImage: platformColor } 
    : { backgroundColor: platformColor };

  // Style for the progress bar
  const progressStyle = isGradient
    ? { width: `${progress}%`, backgroundImage: platformColor }
    : { width: `${progress}%`, backgroundColor: platformColor };
  
  // Style for tinted backgrounds (e.g., step header)
  // Gradients can't be made transparent, so we use a fallback
  const tintedStyle = isGradient
    ? { backgroundColor: '#f5f3ff', borderColor: '#a78bfa' } // purple-50/purple-300
    : { backgroundColor: `${platformColor}1A`, borderColor: platformColor }; // 10% opacity

  // Style for active buttons
  const activeButtonStyle = isGradient
    ? { backgroundImage: platformColor, borderColor: 'transparent' }
    : { backgroundColor: platformColor, borderColor: platformColor };
  // --- END NEW LOGIC ---

  const priorityStyles = {
    'Critical': 'bg-red-100 text-red-800 border-red-300',
    'High Priority': 'bg-orange-100 text-orange-800 border-orange-300',
    'Important': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header (now data-driven) */}
      <div 
        style={colorStyle} 
        className="text-white py-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <Link 
            to={`/guides/${platformName}`} 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-all bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/20"
          >
            <FaArrowLeft className="text-sm" />
            <span className="font-medium">Back to {platformData.platform} Guides</span>
          </Link>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg">{guide.title}</h1>
              <span className={`text-xs px-4 py-2 rounded-full font-semibold border-2 ${priorityStyles[guide.priority]}`}>
                {guide.priority}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm md:text-base opacity-95">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span>📱</span> {platformData.platform}
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span>📂</span> {guide.category}
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <FaList /> {totalSteps} steps
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm md:text-base font-bold text-gray-800">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span 
              className="text-sm md:text-base font-bold" 
              style={isGradient ? { color: '#833AB4' } : { color: platformColor }} // Fallback color for gradient
            >
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
            <div 
              className="h-full rounded-full transition-all duration-500 ease-out shadow-lg"
              style={progressStyle}
            />
            {progress === 100 && (
              <FaCheckCircle className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl" />
            )}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-fade-in">
            {/* Step Header (now supports gradients) */}
            <div className="p-8 border-b-4" style={tintedStyle}>
              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                  style={colorStyle}
                >
                  {currentStep + 1}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1">
                    {currentStepData.title}
                  </h2>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <FaInfoCircle /> Follow the instructions below
                  </p>
                </div>
              </div>
            </div>

            {/* Step Image */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                <img
                  src={getImageUrl(platformName, currentStepData.image)}
                  alt={`Step ${currentStep + 1}: ${currentStepData.title}`}
                  className="w-full h-auto max-h-[600px] object-contain"
                  style={{
                    backgroundColor: '#f9fafb',
                    padding: '2rem'
                  }}
                  onError={(e) => {
                    // Hide image and show placeholder if loading fails
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />
                {/* Hidden fallback for onError */}
                <div style={{ display: 'none' }} className="p-10 flex-col items-center justify-center min-h-[350px] border-4 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="text-8xl mb-6 animate-bounce-slow">📱</div>
                    <p className="text-gray-600 text-lg font-semibold mb-2">Screenshot Placeholder</p>
                    <p className="text-gray-400 text-sm bg-gray-100 px-4 py-2 rounded-lg inline-block">
                      {currentStepData.image}
                    </p>
                    <p className="text-xs text-gray-400 mt-4">Add actual screenshots to see them here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Instruction */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-100 rounded-xl p-3">
                  <FaInfoCircle className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">What to do:</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {currentStepData.instruction}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200">
              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`group flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                    currentStep === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-2xl hover:scale-105'
                  }`}
                >
                  <FaArrowLeft className={currentStep !== 0 ? 'group-hover:-translate-x-1 transition-transform' : ''} />
                  <span>Previous Step</span>
                </button>
                
                {currentStep < totalSteps - 1 ? (
                  <button
                    onClick={handleNext}
                    className="group flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={colorStyle} // Button supports gradient
                  >
                    <span>Next Step</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/guides/${platformName}`)}
                    className="group flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105"
                  >
                    <FaCheckCircle className="text-xl" />
                    <span>Complete Guide</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Guide Description */}
          <div className="mt-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-4">
                <FaInfoCircle className="text-3xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">About This Guide</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{guide.description}</p>
              </div>
            </div>
          </div>

          {/* Quick Navigation (now supports gradients) */}
          <div className="mt-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-3">
                <FaList className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Quick Navigation</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentStep(index);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`group p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                    index === currentStep
                      ? 'text-white shadow-xl scale-105'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1'
                  }`}
                  style={index === currentStep ? activeButtonStyle : {}}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-md ${
                        index === currentStep ? 'bg-white/30' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700'
                      }`}
                    >
                      {index < currentStep ? <FaCheckCircle /> : index + 1}
                    </div>
                    <span className="text-base font-semibold flex-1">{step.title}</span>
                    {index === currentStep && (
                      <span className="text-xs bg-white/30 px-3 py-1 rounded-full">Current</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;