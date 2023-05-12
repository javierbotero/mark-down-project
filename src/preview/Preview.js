import React from "react";
import { useSelector } from 'react-redux';
import { marked } from 'marked';
import * as DOMpurify from 'dompurify';

const Preview = () => {
  const text = useSelector((state) => state.text);
  marked.setOptions({
    breaks: true
  });
  const markedText = DOMpurify.sanitize(marked.parse(text));

  return (
    <>
      <div id="preview" dangerouslySetInnerHTML={{__html: markedText}} />
    </>
  )
}

export default Preview;
