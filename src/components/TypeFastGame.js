import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LANGUAGES, DIFFICULTY_LEVELS } from '../config/languages';
import { getRandomText } from '../config/texts';

function TypeFastGame({ currentLanguage, setIsGameInProgress }) {
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
  const speedUpdateRef = useRef(null);
  const keystrokesRef = useRef(0);
  const isMounted = useRef(true);
  const inputRef = useRef(null);

  const updateSpeed = useCallback(() => {
    if (!startTimeRef.current || !isGameActive) return;

    const timeElapsed = (new Date() - startTimeRef.current) / 1000 / 60;
    if (timeElapsed <= 0) return;

    const averageKpm = Math.round((keystrokesRef.current / timeElapsed) * 10) / 10;
    if (isMounted.current) {
      setSpeed(averageKpm);
    }
  }, [isGameActive]);

  const backToHome = useCallback(() => {
    clearInterval(timerRef.current);
    clearInterval(speedUpdateRef.current);
    setGameStarted(false);
    setCurrentLevel(1);
    setShowCelebration(false);
    setShowGameOver(false);
    setInputText('');
    setSpeed(0);
    keystrokesRef.current = 0;
    setIsGameActive(true);
    setTimeout(() => {
      setIsGameInProgress(false);
    }, 0);
  }, [setIsGameInProgress]);

  const gameOver = useCallback(() => {
    clearInterval(speedUpdateRef.current);
    clearInterval(timerRef.current);
    setIsGameActive(false);
    setShowGameOver(true);
    setTimeout(() => {
      setShowGameOver(false);
      backToHome();
    }, 3000);
  }, [backToHome]);

  const startLevel = useCallback(() => {
    try {
      const randomText = getRandomText(currentLevel, currentLanguage);
      if (!randomText) {
        console.error(`No text found for level ${currentLevel} and language ${currentLanguage}`);
        backToHome();
        return;
      }
      setCurrentText(randomText);
      setInputText('');
      setTimeLeft(DIFFICULTY_LEVELS[difficulty].time);
      setSpeed(0);
      keystrokesRef.current = 0;
      setIsGameActive(true);
      startTimeRef.current = new Date();

      // 清除现有的计时器
      if (timerRef.current) clearInterval(timerRef.current);
      if (speedUpdateRef.current) clearInterval(speedUpdateRef.current);

      // 设置新的计时器
      timerRef.current = setInterval(() => {
        if (!isMounted.current) return;
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            gameOver();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      speedUpdateRef.current = setInterval(() => {
        if (!isMounted.current) return;
        updateSpeed();
      }, 500);

      // 自动聚焦输入框
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (error) {
      console.error('Error starting level:', error);
      backToHome();
    }
  }, [currentLevel, currentLanguage, difficulty, gameOver, updateSpeed, backToHome]);

  useEffect(() => {
    if (gameStarted && isMounted.current) {
      startLevel();
    }
    return () => {
      clearInterval(timerRef.current);
      clearInterval(speedUpdateRef.current);
    };
  }, [gameStarted, startLevel]);

  const startGame = () => {
    handleHomeScreenAction();
    setGameStarted(true);
    setCurrentLevel(1);
    setIsGameInProgress(true);
  };

  const handleLevelComplete = () => {
    clearInterval(timerRef.current);
    clearInterval(speedUpdateRef.current);
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
    
    const newInput = e.target.value;
    const oldInput = inputText;
    setInputText(newInput);

    // 如果输入了新字符，增加按键计数
    if (newInput.length > oldInput.length) {
      keystrokesRef.current += 1;
    }

    if (newInput === currentText) {
      handleLevelComplete();
    }
  };

  const restartGame = () => {
    clearInterval(timerRef.current);
    clearInterval(speedUpdateRef.current);
    setCurrentLevel(1);
    setShowCelebration(false);
    setShowGameOver(false);
    setInputText('');
    setSpeed(0);
    keystrokesRef.current = 0;
    setIsGameActive(true);
    startLevel();
  };

  const renderText = () => {
    if (!currentText) return null;
    
    return currentText.split('').map((char, index) => {
      let className = '';
      if (index < inputText.length) {
        className = inputText[index] === char ? 'highlight' : 'error';
      }
      return <span key={index} className={className}>{char}</span>;
    });
  };

  const handleHomeScreenAction = () => {
    setShowGameOver(false);
    setShowCelebration(false);
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
                  onClick={() => {
                    handleHomeScreenAction();
                    setDifficulty(level);
                  }}
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
          <div className={`input-container ${inputText ? 'has-content' : ''}`}>
            <div className="placeholder-text">
              {currentText}
            </div>
            <textarea
              ref={inputRef}
              id="input-area"
              value={inputText}
              onChange={handleInputChange}
              disabled={!isGameActive}
              spellCheck="false"
            />
          </div>
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
        </div>
      )}
    </div>
  );
}

export default TypeFastGame;