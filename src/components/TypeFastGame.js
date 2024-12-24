import React, { useState, useEffect, useRef } from 'react';
import { LANGUAGES, DIFFICULTY_LEVELS } from '../config/languages';

function TypeFastGame({ currentLanguage }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentText, setCurrentText] = useState('');
  const [inputText, setInputText] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [speed, setSpeed] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [isGameActive, setIsGameActive] = useState(true);
  const [difficulty, setDifficulty] = useState('easy');

  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (gameStarted) {
      startLevel();
    }
    return () => clearInterval(timerRef.current);
  }, [gameStarted, currentLevel, currentLanguage]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentLevel(1);
  };

  const startLevel = () => {
    const currentTexts = LANGUAGES[currentLanguage].texts;
    setCurrentText(currentTexts[currentLevel - 1][0]);
    setInputText('');
    setTimeLeft(DIFFICULTY_LEVELS[difficulty].time);
    setSpeed(0);
    setIsGameActive(true);
    startTimeRef.current = new Date();
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          gameOver();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const updateSpeed = () => {
    const timeElapsed = (new Date() - startTimeRef.current) / 1000 / 60; // in minutes
    let speed;
    
    // 如果没有输入任何内容，速度应该为0
    if (!inputText.trim()) {
      speed = 0;
    } else {
      if (currentLanguage === 'zh') {
        // 对于中文，只计算正确输入的字符
        let correctCharCount = 0;
        const inputChars = inputText.split('');
        const targetChars = currentText.split('');
        
        // 只计算已经正确输入的字符
        for (let i = 0; i < inputChars.length && i < targetChars.length; i++) {
          if (inputChars[i] === targetChars[i]) {
            // 检查是否是中文字符或标点
            if (/[\u4e00-\u9fa5]/.test(inputChars[i]) || 
                /[\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5]/.test(inputChars[i])) {
              correctCharCount++;
            }
          }
        }
        speed = Math.round(correctCharCount / timeElapsed);
      } else {
        // 对于英文和西语，只计算正确输入的单词
        const inputWords = inputText.trim().split(/\s+/);
        const targetWords = currentText.trim().split(/\s+/);
        let correctWordCount = 0;
        
        // 只计算完整且正确的单词
        for (let i = 0; i < inputWords.length && i < targetWords.length; i++) {
          if (inputWords[i] === targetWords[i]) {
            correctWordCount++;
          }
        }
        speed = Math.round(correctWordCount / timeElapsed);
      }
    }
    
    setSpeed(speed);
  };

  const handleLevelComplete = () => {
    clearInterval(timerRef.current);
    setIsGameActive(false);
    if (currentLevel === 10) {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        backToHome();
      }, 3000);
    } else {
      setCurrentLevel((prevLevel) => prevLevel + 1);
    }
  };

  const handleInputChange = (e) => {
    if (!isGameActive) return;
    
    setInputText(e.target.value);
    if (startTimeRef.current) {
      updateSpeed();
    }
    if (e.target.value === currentText) {
      handleLevelComplete();
    }
  };

  const backToHome = () => {
    setGameStarted(false);
    setCurrentLevel(1);
    setShowCelebration(false);
    setShowGameOver(false);
    setInputText('');
    setSpeed(0);
    setIsGameActive(true);
    clearInterval(timerRef.current);
  };

  const restartGame = () => {
    setCurrentLevel(1);
    setShowCelebration(false);
    setShowGameOver(false);
    setInputText('');
    setSpeed(0);
    setIsGameActive(true);
    clearInterval(timerRef.current);
    startLevel();
  };

  const gameOver = () => {
    setIsGameActive(false);
    setShowGameOver(true);
    setTimeout(() => {
      if (showGameOver) {
        backToHome();
      }
    }, 3000);
  };

  const renderText = () => {
    return currentText.split('').map((char, index) => {
      let className = '';
      if (index < inputText.length) {
        className = inputText[index] === char ? 'highlight' : 'error';
      }
      return <span key={index} className={className}>{char}</span>;
    });
  };

  return (
    <div id="game-container" className="fade-in">
      {!gameStarted ? (
        <div id="home-screen">
          <h1 className="main-title">{LANGUAGES[currentLanguage].mainTitle}</h1>
          <div className="difficulty-selector">
            <h3>{LANGUAGES[currentLanguage].difficulty.title}</h3>
            <div className="difficulty-buttons">
              {Object.entries(DIFFICULTY_LEVELS).map(([level, config]) => (
                <button
                  key={level}
                  className={`button difficulty-button ${
                    difficulty === level ? 'active' : ''
                  }`}
                  onClick={() => setDifficulty(level)}
                >
                  {LANGUAGES[currentLanguage].difficulty[config.label]}
                </button>
              ))}
            </div>
          </div>
          <button
            className="button primary hover-scale start-button"
            onClick={startGame}
          >
            {LANGUAGES[currentLanguage].startGame}
          </button>
        </div>
      ) : (
        <div id="game-area">
          <div id="stats">
            <div>Level: <span id="level">{currentLevel}</span>/10</div>
            <div>Time: <span id="time">{timeLeft}</span>s</div>
            <div>Speed: <span id="speed">{speed}</span> {LANGUAGES[currentLanguage].speedUnit}</div>
          </div>
          <div id="text-display">{renderText()}</div>
          <textarea
            id="input-area"
            value={inputText}
            onChange={handleInputChange}
            disabled={!isGameActive}
            placeholder={LANGUAGES[currentLanguage].texts[currentLevel - 1][1]}
          />
          <div className="button-group">
            <button 
              className="button secondary hover-scale" 
              onClick={restartGame}
              disabled={!isGameActive}
            >
              {LANGUAGES[currentLanguage].restartGame}
            </button>
            <button className="button secondary hover-scale" onClick={backToHome}>
              {LANGUAGES[currentLanguage].backToHome}
            </button>
          </div>
        </div>
      )}
      {showCelebration && (
        <div id="celebration" className="celebration-animation">
          {LANGUAGES[currentLanguage].congratulations}
        </div>
      )}
      {showGameOver && (
        <div className="game-over-modal">
          <h2>{LANGUAGES[currentLanguage].gameOver}</h2>
          <button 
            className="button primary hover-scale"
            onClick={() => {
              setShowGameOver(false);
              restartGame();
            }}
          >
            {LANGUAGES[currentLanguage].restartGame}
          </button>
        </div>
      )}
    </div>
  );
}

export default TypeFastGame;