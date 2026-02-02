import React, { useEffect } from 'react';

const ProfileModal = ({ card, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const renderContent = () => {
    switch (card.id) {
      case 'about':
        return (
          <div className="space-y-6">
            {/* Summary */}
            <p className="text-lg text-gray-300 leading-relaxed">{card.content.summary}</p>
            
            {/* Education */}
            {card.content.education && (
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-5 border border-blue-500/20">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  🎓 Education
                </h4>
                <div className="text-white font-medium">{card.content.education.school}</div>
                <div className="text-gray-400">{card.content.education.major}</div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-500">{card.content.education.period}</span>
                  <span className="text-green-400 font-semibold">GPA: {card.content.education.gpa}</span>
                </div>
              </div>
            )}

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Strengths</h4>
              <ul className="space-y-2">
                {card.content.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-green-400 mt-1">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-4">
            {card.content.skills.map((skillGroup, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">
                    {skillGroup.category}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    skillGroup.level === 'Experienced' ? 'bg-green-500/20 text-green-400' :
                    skillGroup.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {skillGroup.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-sm text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-4">
            {card.content.items.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-5 border border-yellow-500/20">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-xl font-bold text-white">{item.title}</div>
                  <div className="text-yellow-400 font-semibold text-sm">{item.value}</div>
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            {card.content.projects.map((project, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-pink-500/30 transition-all">
                {/* Project Header */}
                <h4 className="text-xl font-bold text-white mb-1">{project.name}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>📅 {project.period}</span>
                  <span>👤 {project.role}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-pink-400 mt-0.5">•</span> {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300 border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl sm:rounded-2xl w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${card.gradient} p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl sticky top-0 z-10`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-2xl sm:text-4xl">{card.icon}</span>
              <h3 className="text-lg sm:text-2xl font-bold text-white">{card.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all flex-shrink-0"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;