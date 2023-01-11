import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

export default function RichTextEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }
  const handleClick = () => {
      RichUtils.toggleInlineStyle(editorState, 'BOLD');
  }

  return (
    <div>
        <button onClick={handleClick}>Bold</button>
        <div
            style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
            onClick={focusEditor}
        >
            <Editor
            ref={editor}
            editorState={editorState}
            onChange={setEditorState}
            placeholder="Write something!"
            />
        </div>
    </div>
  );
}