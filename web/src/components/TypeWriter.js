import React, { useState, useEffect } from 'react';

export default function TypeWriter({ typingSpeed = 100 }) {

  const text = 'You: Hi mr. Barners.'

  const [typedText, setTypedText] = useState('Oi');

  useEffect(() => {
    let i = 0;
    const type = () => {
      setTypedText(text.slice(0, i));
      if (i < text.length) {
        setTimeout(() => {
          i++;
          type();
        }, typingSpeed);
      }
    };
    type();
  }, [text, typingSpeed]);

  return (
    <div>
      <div>{typedText}{typedText}</div>
      <div>{typedText}{typedText}</div>
    </div>

  )
};

