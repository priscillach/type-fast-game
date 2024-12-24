import React, { useState } from 'react';
import TypeFastGame from './components/TypeFastGame';
import { LANGUAGES } from './config/languages';
import './styles/App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isGameInProgress, setIsGameInProgress] = useState(false);

  const handleLanguageChange = (e) => {
    if (isGameInProgress) {
      return;
    }
    setCurrentLanguage(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="top-language-selector">
        <select
          value={currentLanguage}
          onChange={handleLanguageChange}
          className="language-dropdown"
          disabled={isGameInProgress}
        >
          {Object.entries(LANGUAGES).map(([code, lang]) => (
            <option key={code} value={code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <h1 className="app-title">{LANGUAGES[currentLanguage].siteTitle}</h1>
      <p className="app-description">{LANGUAGES[currentLanguage].siteDescription}</p>

      <div className="rules-section">
        <h2 className="rules-title">{LANGUAGES[currentLanguage].rulesTitle}</h2>
        <ul className="rules-list">
          {LANGUAGES[currentLanguage].rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <TypeFastGame 
        currentLanguage={currentLanguage} 
        setIsGameInProgress={setIsGameInProgress} 
      />
    </div>
  );
}

export default App;
