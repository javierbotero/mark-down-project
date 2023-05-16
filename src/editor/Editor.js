import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Preview from '../preview/Preview';
import { addText } from '../store';

const Editor = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.text)
  const onChange = (event) => dispatch(addText(event.target.value));
  return (
    <>
      <textarea
        id="editor"
        placeholder="placeholder"
        onChange={onChange}
        value={text}
        rows="10"
        className="col-12 forty-percent-height border border-5"
      />
      <Preview />
    </>
  )
}

export default Editor;
