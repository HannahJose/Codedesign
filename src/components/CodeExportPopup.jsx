import React, { useState } from 'react';
import './CodeExportPopup.css';

const CodeExportPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('html');

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const htmlContent = [
    {
      id: 1,
      checked: true,
      label: 'Export as HTML & CSS',
      description: 'Get basic HTML structure and CSS styling',
      icon: '📄'
    },
    {
      id: 2,
      checked: false,
      label: 'Copy HTML markup only',
      description: 'Just the HTML structure without CSS',
      icon: '📋'
    },
    {
      id: 3,
      checked: false,
      label: 'Include responsive breakpoints',
      description: 'Add mobile and tablet responsive styles',
      icon: '📱'
    },
    {
      id: 4,
      checked: false,
      label: 'Minify CSS output',
      description: 'Compress CSS for production use',
      icon: '🗜️'
    }
  ];

  const nextjsContent = [
    {
      id: 1,
      checked: true,
      label: 'Export as React Component',
      description: 'Generate functional React component',
      icon: '⚛️'
    },
    {
      id: 2,
      checked: false,
      label: 'Include TypeScript types',
      description: 'Add TypeScript interface definitions',
      icon: '🔷'
    },
    {
      id: 3,
      checked: false,
      label: 'Use CSS Modules',
      description: 'Generate scoped CSS module files',
      icon: '🎨'
    },
    {
      id: 4,
      checked: false,
      label: 'Include prop validation',
      description: 'Add PropTypes or TypeScript validation',
      icon: '✅'
    }
  ];

  const getCurrentContent = () => {
    return activeTab === 'html' ? htmlContent : nextjsContent;
  };

  return (
    <div className="app-container">
      <button className="export-button" onClick={openPopup}>
        EXPORT CODE
      </button>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="popup-header">
              <h2>Code Export</h2>
              <p>Manage the way your code will be exported.</p>
              <button className="close-button" onClick={closePopup}>
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="tabs-container">
              <button 
                className={`tab ${activeTab === 'html' ? 'active' : ''}`}
                onClick={() => setActiveTab('html')}
              >
                HTML & CSS
              </button>
              <button 
                className={`tab ${activeTab === 'nextjs' ? 'active' : ''}`}
                onClick={() => setActiveTab('nextjs')}
              >
                Next.JS
              </button>
            </div>

            {/* Content */}
            <div className="popup-content">
              {getCurrentContent().map((item) => (
                <div key={item.id} className="content-item">
                  <div className="checkbox-container">
                    <input 
                      type="checkbox" 
                      id={`item-${item.id}`}
                      defaultChecked={item.checked}
                      className="custom-checkbox"
                    />
                    <label htmlFor={`item-${item.id}`} className="checkbox-label">
                      <span className="checkbox-icon">{item.icon}</span>
                      <div className="checkbox-text">
                        <span className="checkbox-title">{item.label}</span>
                        <span className="checkbox-description">{item.description}</span>
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="popup-footer">
              <button className="download-button">
                Download HTML & CSS Files
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExportPopup;