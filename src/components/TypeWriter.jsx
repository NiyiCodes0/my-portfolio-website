import { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay = 100, accentWord = '' }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  const renderText = () => {
    if (!accentWord || !currentText.includes(accentWord)) {
      return currentText;
    }
    
    const parts = currentText.split(accentWord);
    
    return (
      <>
        {parts[0]}
        <span className="text-[#FF6B35]">{accentWord}</span>
        {parts[1] || ''}
      </>
    );
  };

  return (
    <span>
      {renderText()}
      <span className="animate-pulse text-[#FF6B35]">|</span>
    </span>
  );
};

export default TypeWriter;
