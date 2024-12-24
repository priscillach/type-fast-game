import React, { useState, useEffect, useRef } from 'react';
import { LANGUAGES, calculateSpeed, getDifficultyFactor } from '../config/languages';

function TypeFastGame({ currentLanguage }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentText, setCurrentText] = useState('');
  const [inputText, setInputText] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [speed, setSpeed] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);

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
    setTimeLeft(10);
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
      updateSpeed();
    }, 1000);
  };

  const updateSpeed = () => {
    const timeElapsed = (new Date() - startTimeRef.current) / 1000 / 60; // in minutes
    const newSpeed = calculateSpeed(inputText, timeElapsed, currentLanguage);
    setSpeed(newSpeed);
  };

  const handleLevelComplete = () => {
    clearInterval(timerRef.current);
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
    setInputText(e.target.value);
    if (e.target.value === currentText) {
      handleLevelComplete();
    }
  };

  const backToHome = () => {
    setGameStarted(false);
    setCurrentLevel(1);
    setShowCelebration(false);
    setInputText('');
    clearInterval(timerRef.current);
  };

  const restartGame = () => {
    setCurrentLevel(1);
    setShowCelebration(false);
    setInputText('');
    clearInterval(timerRef.current);
    startLevel();
  };

  const gameOver = () => {
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
            placeholder={LANGUAGES[currentLanguage].texts[currentLevel - 1][1]}
          />
          <div className="button-group">
            <button className="button secondary hover-scale" onClick={restartGame}>
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