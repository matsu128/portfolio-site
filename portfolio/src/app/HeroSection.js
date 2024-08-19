import React, { useEffect, useState, useMemo } from 'react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState([]);
  const isMobile = window.innerWidth < 768;

  const fullText = useMemo(() => {
    return isMobile
      ? [
          "お客様の「作りたい」を形にする",
          "エンジニアです。",
          "ヒアリングから納品までを",
          "一貫してサポートいたします。"
        ]
      : [
          "お客様の「作りたい」を形にするエンジニアです。",
          "ヒアリングから納品までを一貫してサポートいたします。"
        ];
  }, [isMobile]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = fullText[lineIndex];
    const timer = setInterval(() => {
      if (charIndex < currentLine.length) {
        setDisplayedText(prev => {
          const newDisplayedText = [...prev];
          newDisplayedText[lineIndex] = (newDisplayedText[lineIndex] || '') + currentLine[charIndex];
          return newDisplayedText;
        });
        charIndex++;
      } else {
        charIndex = 0;
        lineIndex++;
        if (lineIndex >= fullText.length) {
          clearInterval(timer);
        } else {
          currentLine = fullText[lineIndex];
        }
      }
    }, 30); // 100ミリ秒ごとに1文字を追加

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-white"
    >
      <div className="text-center animate-fadeInUp text-black">
        <h1 className="text-6xl font-bold mb-12 animate-fadeInUp font-rounded">
          <span className="text-gray-800 hover:text-gray-600 transition duration-300 transform hover:-translate-y-1 animate-slideIn">Welcome</span>{' '}
          <span className="text-blue-900 hover:text-blue-700 transition duration-300 transform hover:-translate-y-1 animate-slideIn delay-1s">to</span>{' '}
          <span className="text-gray-700 hover:text-gray-500 transition duration-300 transform hover:-translate-y-1 animate-slideIn delay-2s">my</span>{' '}
          <span className="text-indigo-900 hover:text-indigo-700 transition duration-300 transform hover:-translate-y-1 animate-slideIn delay-3s">portfolio</span>
        </h1>
        <p className="text-2xl mb-12 animate-slideIn delay-4s">
          {displayedText.map((line, index) => (
            <span key={index}>
              {line}
              <br />
              <br />
            </span>
          ))}
        </p>
        <div className="animate-slideIn delay-8s">
          <a
            href="#contact"
            className="text-xl font-semibold underline hover:text-blue-600 transition duration-300"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
