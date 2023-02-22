import React, { useState, useEffect } from 'react';

export default function TypeWriter(props, { typingSpeed = 100 }){

  const text = props.text

  const [typedText, setTypedText] = useState('Oi');

  useEffect(() => {
    if (props.end) { setTypedText(text) }
    else {
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
    }
  }, [text, typingSpeed]);

  return (
    <>
      <div hidden={props.hidden}>{typedText}</div>
    </>

  )
};

