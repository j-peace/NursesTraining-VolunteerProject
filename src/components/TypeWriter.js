import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

export default function TypeWriter(props) {

  const [writedText, setWritedText] = useState('...')

  useEffect(() => {
    let i = 0;
    function type() {
      setWritedText(props.text.slice(0, i));
      if (i < props.text.length) {
        setTimeout(() => { i++; type() }, 40);
      }
    };
    type();
  }, [props.hidden]);

  useEffect(() => {
    if (props.end) { setWritedText(props.text) }
  }, [props.end]);

  return (
    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1} hidden={props.hidden}>
      <Box fontWeight={'bold'} display='inline' mr={1}>
        {props.boldText}
      </Box>
      {props.fixedText + writedText}
    </Typography>
  )
};

