import React, { useState, useEffect, useRef } from 'react';

const texts = {
  en: [
    "The quick brown fox jumps over the lazy dog.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "A journey of a thousand miles begins with a single step.",
    "Where there's a will, there's a way.",
    "The early bird catches the worm, but the second mouse gets the cheese.",
    "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
    "Ask not what your country can do for you, ask what you can do for your country.",
    "The only thing we have to fear is fear itself.",
    "That's one small step for man, one giant leap for mankind."
  ],
  zh: [
    "学而时习之，不亦说乎？",
    "人生自古谁无死，留取丹心照汗青。",
    "千里之行，始于足下。",
    "不以物喜，不以己悲。",
    "海内存知己，天涯若比邻。",
    "人生得意须尽欢，莫使金樽空对月。",
    "长风破浪会有时，直挂云帆济沧海。",
    "欲穷千里目，更上一层楼。",
    "会当凌绝顶，一览众山小。",
    "人生如逆旅，我亦是行人。"
  ],
};

function TypeFastGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentText, setCurrentText] = useState('');
  const [inputText, setInputText] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [speed, setSpeed] = useState(0);
  const [language, setLanguage] = useState('en');
  const [showCelebration, setShowCelebration] = useState(false);

  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (gameStarted) {
      startLevel();
    }
    return () => clearInterval(timerRef.current);
  }, [gameStarted, currentLevel, language]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentLevel(1);
  };

  const startLevel = () => {
    setCurrentText(texts[language][currentLevel - 1]);
    setInputText('');
    setTimeLeft(30);
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
    let newSpeed;
    if (language === 'zh') {
      const charactersTyped = inputText.length;
      newSpeed = Math.round(charactersTyped / timeElapsed);
    } else {
      const wordsTyped = inputText.trim().split(/\s+/).length;
      newSpeed = Math.round(wordsTyped / timeElapsed);
    }
    setSpeed(newSpeed);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (e.target.value === currentText) {
      clearInterval(timerRef.current);
      if (currentLevel === 10) {
        setShowCelebration(true);
      } else {
        setCurrentLevel((prevLevel) => prevLevel + 1);
      }
    }
  };

  const gameOver = () => {
    alert('Time\'s up! Game over.');
    restartGame();
  };

  const restartGame = () => {
    setCurrentLevel(1);
    setGameStarted(true);
  };

  const changeLanguage = (e) => {
    const newLanguage = e.target.value;
    if (currentLevel > 1) {
      if (window.confirm("Changing language will restart the game. Are you sure?")) {
        setLanguage(newLanguage);
        restartGame();
      }
    } else {
      setLanguage(newLanguage);
    }
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
    <div id="game-container">
      <h1>Type Faster</h1>
      {!gameStarted ? (
        <div id="game-rules">
          <div>
            <label htmlFor="language-select">Select Language:</label>
            <select id="language-select" value={language} onChange={changeLanguage}>
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </div>
          <button id="start-button" onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <div id="game-area">
          <div id="stats">
            <div>Level: <span id="level">{currentLevel}</span>/10</div>
            <div>Time: <span id="time">{timeLeft}</span>s</div>
            <div>Speed: <span id="speed">{speed}</span> <span id="speed-unit">{language === 'zh' ? 'CPM' : 'WPM'}</span></div>
          </div>
          <div id="text-display">{renderText()}</div>
          <textarea
            id="input-area"
            rows="4"
            cols="50"
            value={inputText}
            onChange={handleInputChange}
          />
          <button id="restart-button" onClick={restartGame}>Restart Game</button>
        </div>
      )}
      {showCelebration && (
        <div id="celebration">Congratulations! You've completed all levels!</div>
      )}
    </div>
  );
}

export default TypeFastGame;