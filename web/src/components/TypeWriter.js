import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

export default function TypeWriter(props, { typingSpeed = 40 }) {

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
    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1} hidden={props.hidden}>
      <Box fontWeight={'bold'} display='inline' mr={1}>
        {props.boldText}
      </Box>
      {typedText}
    </Typography>
  )
};

