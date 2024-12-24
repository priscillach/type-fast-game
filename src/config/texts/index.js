import englishTexts from './english';
import chineseTexts from './chinese';
import spanishTexts from './spanish';

export const gameTexts = {
  en: englishTexts,
  zh: chineseTexts,
  es: spanishTexts
};

// 根据难度和语言随机获取一条文本
export const getRandomText = (difficulty, language) => {
  try {
    const texts = gameTexts[language][difficulty - 1];
    if (!texts || !texts.length) {
      console.error(`No texts found for difficulty ${difficulty} and language ${language}`);
      return null;
    }
    return texts[Math.floor(Math.random() * texts.length)];
  } catch (error) {
    console.error('Error getting random text:', error);
    return null;
  }
}; 