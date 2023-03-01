import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

export default function TypeWriter(props, { typingSpeed = 40 }) {

  const text = props.text
  const [writedText, setWritedText] = useState('...')

  // if (props.end) { console.log(props.end); setWriteddText(text) }


  // function type() {
  //   let i = 0;
  //   if (i >= text.length) return;
  //   else {
  //     setWritedText(text.slice(0, i));
  //     console.log('here', i, writedText)
  //     i++
  //     return
  //   }
  // }

  useEffect(() => {
    let i = 0;
    function type() {
      if (props.end) { setWritedText(text) }
      setWritedText(text.slice(0, i));
      if (i < text.length) {
        setTimeout(() => { i++; type() }, typingSpeed);
      }
    };
    type();
  }, [props.hidden]);

  useEffect(() => {
    if (props.end) { setWritedText(text);  console.log('hereeee')}
  }, [props.end]);

  return (
    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1} hidden={props.hidden}>
      <Box fontWeight={'bold'} display='inline' mr={1}>
        {props.boldText}
      </Box>
      {writedText}
    </Typography>
  )
};

