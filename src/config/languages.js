export const LANGUAGES = {
  en: {
    name: 'English',
    speedUnit: 'WPM',
    gameTitle: 'Type Faster',
    selectLanguage: 'Select Language',
    startGame: 'Start Game',
    restartGame: 'Restart Game',
    backToHome: 'Back to Home',
    level: 'Level',
    time: 'Time',
    speed: 'Speed',
    congratulations: 'Congratulations! You\'ve completed all levels!',
    gameOver: 'Time\'s up! Game over.',
    confirmLanguageChange: 'Changing language will restart the game. Are you sure?',
    texts: [
      ["The quick brown fox jumps over the lazy dog.", "Basic sentence with all letters"],
      ["To be or not to be, that is the question.", "Famous Shakespeare quote"],
      ["All that glitters is not gold.", "Simple proverb"],
      ["Life is like a box of chocolates.", "Movie quote"],
      ["Actions speak louder than words.", "Common saying"],
      ["Where there's a will, there's a way.", "Motivational phrase"],
      ["Time heals all wounds.", "Emotional expression"],
      ["Knowledge is power, guard it well.", "Educational quote"],
      ["The early bird catches the worm.", "Traditional proverb"],
      ["Success is not final, failure is not fatal.", "Complex motivation"]
    ],
    mainTitle: 'Typing Speed Test Game',
    rules: [
      'Select your preferred language',
      'Complete 10 levels of increasing difficulty',
      'Type the text exactly as shown',
      'Complete each level within 10 seconds',
      'Track your typing speed in words per minute'
    ],
    siteTitle: 'Typing Speed Master',
    siteDescription: 'Improve your typing speed and accuracy with our multilingual typing game. Choose your preferred language and challenge yourself through increasingly difficult levels.',
    rulesTitle: 'Game Rules'
  },
  es: {
    name: 'Español',
    speedUnit: 'PPM',
    gameTitle: 'Escribe Más Rápido',
    selectLanguage: 'Seleccionar Idioma',
    startGame: 'Comenzar Juego',
    restartGame: 'Reiniciar Juego',
    backToHome: 'Volver al Inicio',
    level: 'Nivel',
    time: 'Tiempo',
    speed: 'Velocidad',
    congratulations: '¡Felicitaciones! ¡Has completado todos los niveles!',
    gameOver: '¡Se acabó el tiempo! Fin del juego.',
    confirmLanguageChange: 'Cambiar el idioma reiniciará el juego. ¿Estás seguro?',
    texts: [
      ["El rápido zorro marrón salta sobre el perro perezoso.", "Oración básica"],
      ["En un lugar de la Mancha, de cuyo nombre no quiero acordarme.", "Literatura clásica"],
      ["La vida es como una caja de chocolates.", "Cita de película"],
      ["Más vale tarde que nunca.", "Proverbio común"],
      ["Quien mucho abarca, poco aprieta.", "Refrán tradicional"],
      ["No hay mal que por bien no venga.", "Dicho popular"],
      ["A caballo regalado no le mires el diente.", "Refrán clásico"],
      ["Del dicho al hecho hay mucho trecho.", "Sabiduría popular"],
      ["A buen entendedor, pocas palabras bastan.", "Expresión común"],
      ["La práctica hace al maestro.", "Frase motivacional"]
    ],
    mainTitle: 'Juego de Prueba de Velocidad de Escritura',
    rules: [
      'Selecciona tu idioma preferido',
      'Completa 10 niveles de dificultad creciente',
      'Escribe el texto exactamente como se muestra',
      'Completa cada nivel en 10 segundos',
      'Mide tu velocidad de escritura en palabras por minuto'
    ],
    siteTitle: 'Maestro de Mecanografía',
    siteDescription: 'Mejora tu velocidad y precisión de escritura con nuestro juego de mecanografía multilingüe. Elige tu idioma preferido y desafíate a través de niveles cada vez más difíciles.',
    rulesTitle: 'Reglas del Juego'
  },
  zh: {
    name: '中文',
    speedUnit: 'CPM',
    gameTitle: '打字速度测试',
    selectLanguage: '选择语言',
    startGame: '开始游戏',
    restartGame: '重新开始',
    backToHome: '返回主页',
    level: '关卡',
    time: '时间',
    speed: '速度',
    congratulations: '恭喜！你已完成所有关卡！',
    gameOver: '时间到！游戏结束。',
    confirmLanguageChange: '更换语言将重新开始游戏。确定吗？',
    texts: [
      ["学而时习之，不亦说乎？", "论语经典"],
      ["人生自古谁无死，留取丹心照汗青。", "爱国诗句"],
      ["千里之行，始于足下。", "励志名言"],
      ["不以物喜，不以己悲。", "人生哲理"],
      ["海内存知己，天涯若比邻。", "友情名句"],
      ["读书破万卷，下笔如有神。", "学习箴言"],
      ["青山遮不住，毕竟东流去。", "山水诗句"],
      ["欲穷千里目，更上一层楼。", "登高望远"],
      ["会当凌绝顶，一览众山小。", "豪迈诗句"],
      ["路漫漫其修远兮，吾将上下而求索。", "追求理想"]
    ],
    mainTitle: '打字速度测试游戏',
    rules: [
      '选择您喜欢的语言',
      '完成10个难度递增的关卡',
      '准确输入显示的文本',
      '在10秒内完成每个关卡',
      '实时跟踪您的打字速度'
    ],
    siteTitle: '打字速度大师',
    siteDescription: '通过我们的多语言打字游戏提高您的打字速度和准确性。选择您喜欢的语言，挑战自我，通过逐渐增加难度的关卡。',
    rulesTitle: '游戏规则'
  }
};

export const calculateSpeed = (inputText, timeElapsed, language) => {
  switch (language) {
    case 'zh':
    case 'ja':
      // For Chinese and Japanese, count characters per minute
      return Math.round(inputText.length / timeElapsed);
    default:
      // For other languages, count words per minute
      return Math.round((inputText.trim().split(/\s+/).length) / timeElapsed);
  }
};

export const getDifficultyFactor = (language, level) => {
  const baseDifficulty = level * 1.2;
  
  switch (language) {
    case 'zh':
    case 'ja':
      return baseDifficulty * 0.7; // Adjust for character-based languages
    default:
      return baseDifficulty;
  }
}; 