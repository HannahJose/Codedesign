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
      label: 'Include assets (images, styles, fonts, etc.)'
    },
    {
      id: 2,
      checked: true,
      label: 'Include custom code'
    }
  ];

  const nextjsContent = [
    {
      id: 1,
      checked: true,
      label: "Use 'app' directory (NextJS v13+)"
    },
    {
      id: 2,
      checked: true,
      label: 'Include assets locally (images, styles, fonts, etc.)'
    },
    {
      id: 3,
      checked: true,
      label: 'Include custom code'
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
              <p>Manage how you download your website's code.</p>
              <button className="close-button" onClick={closePopup}>
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="popup-content">
              <div className="content-box">
                {/* Tabs */}
                <div className="tabs-container">
                  <div className="tab-wrapper">
                    <button 
                      className={`tab ${activeTab === 'html' ? 'active' : ''}`}
                      onClick={() => setActiveTab('html')}
                    >
                      HTML & CSS
                    </button>
                  </div>
                  <div className="tab-wrapper">
                    <button 
                      className={`tab ${activeTab === 'nextjs' ? 'active' : ''}`}
                      onClick={() => setActiveTab('nextjs')}
                    >
                      Next JS
                    </button>
                  </div>
                </div>

                {/* Export Content */}
                {activeTab === 'html' && (
                  <div className="export-section">
                    <div className="export-header">
                      <div className="export-title">
                        <span className="html-icon">5</span>
                        <span>Export as HTML & CSS</span>
                      </div>
                      <span className="zipped-badge">Zipped</span>
                    </div>
                    <div className="options-list">
                      {htmlContent.map((item) => (
                        <div key={item.id} className="option-item">
                          <input 
                            type="checkbox" 
                            id={`item-${item.id}`}
                            defaultChecked={item.checked}
                            className="custom-checkbox"
                          />
                          <label htmlFor={`item-${item.id}`} className="option-label">
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'nextjs' && (
                  <div className="export-section">
                    <div className="export-header">
                      <div className="export-title">
                        <span className="nextjs-icon">⚡</span>
                        <span>Export as Next JS Project</span>
                      </div>
                      <span className="zipped-badge">Zipped</span>
                    </div>
                    <div className="options-list">
                      {nextjsContent.map((item) => (
                        <div key={item.id} className="option-item">
                          <input 
                            type="checkbox" 
                            id={`item-${item.id}`}
                            defaultChecked={item.checked}
                            className="custom-checkbox"
                          />
                          <label htmlFor={`item-${item.id}`} className="option-label">
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="popup-footer">
              <button className="download-button">
                {activeTab === 'html' ? 'Download HTML CSS Project' : 'Download Next JS Project'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExportPopup;