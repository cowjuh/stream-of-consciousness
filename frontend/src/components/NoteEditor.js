import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faThLarge,
  faCalendar,
  faTrash,
  faPencilAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "./noteEditor.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { splitByCommas } from "../utils/api";
import axios from "axios";
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import Tag from "./Atoms/Tag";
import NotePreview from "./NotePreview";
import ClickableIcon from "./Atoms/ClickableIcon";
import useViewPort from "../utils/hooks/useViewport";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0px 30px;
  position: relative;

  @media (max-width: 768px) {
    height: 95vh;
  }
`;

const EditorSection = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid #f6f6f6;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  background-color: white;
  position: fixed;
`;

const TextContainer = styled.div`
  height: auto;
  min-width: 50%;
  flex: 1;
  border: none;
  resize: none;
  margin: 0px;

  :focus {
    outline: none !important;
    color: black;
  }
`;

const FieldInputContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;

const InputIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  margin-right: 10px;
`;

const InputName = styled.p`
  cursor: default;
  margin: 0;
  color: gray;
  margin-right: 10px;
  display: inline-block;
  min-width: 120px;
`;

const PreviewContainer = styled.div`
  height: auto;
  min-width: 50%;
  border-left: 1px solid #e6e6e6;
  padding: 10px;
`;

const EditorColumnsContainer = styled.div`
  display: ${(props) => (props.isMobile ? "block" : "flex")};
  justify-content: space-between;
  width: 100%;
`;

const SectionText = styled.h5`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  color: gray;
`;

const NoteEditor = (props) => {
  const user = props.user;
  const [title, setTitle] = useState(props && props.title);
  const [content, setContent] = useState(props && props.content);
  const [previewContent, setPreviewContent] = useState(props && props.content);
  const [category, setCategory] = useState(props && props.category);
  const [tags, setTags] = useState(props && props.tags);
  const [stringTags, setStringTags] = useState();
  const [editing, setEditing] = useState(false);
  const [newNote, setNewNote] = useState(props.newNote ? true : false);
  const [copied, setCopied] = useState();
  const id = props && props.id;
  dayjs.extend(relativeTime);
  var lastUpdated = props && dayjs().to(props.updatedAt);
  var lastCreated = props && dayjs().to(props.createdAt);
  const history = useHistory();
  let params = new URLSearchParams(window.location.search);
  const queryCategory = params.get("category");
  const { isMobile } = useViewPort();

  const routeChange = (route) => {
    let path = `${route}`;
    history.push(path);
  };

  const handleSave = () => {
    props.handleUpdate();
    let tagArray;
    if (stringTags) {
      tagArray = splitByCommas(stringTags);
      setTags(tagArray);
    } else {
      tagArray = tags;
    }
    const updatedNote = {
      title: title,
      content: content,
      category: category,
      tags: tagArray,
    };
    axios
      .post(`api/notes/update/${id}`, updatedNote)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setEditing(false);
  };

  const handleNewNote = () => {
    let tagArray;
    if (stringTags) {
      tagArray = splitByCommas(stringTags);
      setTags(tagArray);
    } else {
      tagArray = tags;
    }
    const updatedNote = {
      userID: user._id,
      title: title,
      content: content,
      category: category,
      tags: tagArray,
    };
    axios
      .post(`api/notes/add`, updatedNote)
      .then((res) => {
        console.log(res.data);
        routeChange(`/note/${res.data}`);
      })
      .catch((err) => {
        console.log(err);
      });
    props.handleUpdate();
  };

  const handleDelete = () => {
    routeChange("/");
    props.handleUpdate();
    axios
      .delete(`api/notes/${id}`)
      .then(console.log("Note deleted!"))
      .catch((err) => {
        console.log(err);
      });
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(`http://hellohellohello.world/note/${id}`);
    setCopied(true);
    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const updatePreview = (e) => {
    e.preventDefault();
    setPreviewContent(e.currentTarget.textContent);
  };

  return (
    <Router>
      <EditorContainer>
        <Toolbar>
          {newNote ? (
            <Button onClick={handleNewNote} value="Create" />
          ) : (
            <>
              {editing ? (
                <>
                  <Button onClick={handleSave} value="Save" />
                  <a
                    onClick={() => setEditing(false)}
                    style={{ color: "#888888", cursor: "pointer" }}
                    className="m-0 mr-2"
                  >
                    Cancel
                  </a>
                </>
              ) : (
                <ClickableIcon
                  margin
                  onClick={() => setEditing(true)}
                  color={"#3f51b5"}
                  icon={faPencilAlt}
                />
              )}
              <ClickableIcon
                margin
                onClick={copyLinkToClipboard}
                color={"#4caf97"}
                icon={faLink}
              />
              <ClickableIcon
                margin
                onClick={handleDelete}
                color={"#e91e63"}
                icon={faTrash}
              />
              {copied && (
                <p style={{ color: "#888888" }} className="m-0">
                  Copied link to clipboard!
                </p>
              )}
            </>
          )}
        </Toolbar>
        <EditorSection style={{ marginTop: "50px" }}>
          <FieldInputContainer>
            <InputIcon color="#C4C6C8" icon={faCalendar} />
            <InputName>Updated</InputName>
            <TextContainer style={{ color: "#888888" }} contentEditable={false}>
              {lastUpdated && !newNote ? lastUpdated : "-"}
            </TextContainer>
          </FieldInputContainer>
          <FieldInputContainer>
            <InputIcon color="#C4C6C8" icon={faTag} />
            <InputName>Tags</InputName>
            {editing || newNote ? (
              <TextContainer
                id="note-tags"
                onInput={(e) => setStringTags(e.currentTarget.textContent)}
                className="text-editor"
                contentEditable={true}
                placeholder="None"
              >
                {tags &&
                  tags.map((tag) => {
                    return tag ? tag + "," : "";
                  })}
              </TextContainer>
            ) : (
              <TextContainer>
                {tags &&
                  tags.map((tag) => {
                    return (
                      <Tag
                        value={tag}
                        onClick={() => console.log("Clicked tag: ", tag)}
                      />
                    );
                  })}
              </TextContainer>
            )}
          </FieldInputContainer>
          <FieldInputContainer>
            <InputIcon color="#C4C6C8" icon={faThLarge} />
            <InputName>Category</InputName>
            <TextContainer
              id="note-category"
              suppressContentEditableWarning={true}
              onBlur={(e) => setCategory(e.currentTarget.textContent)}
              className="text-editor"
              contentEditable={editing || newNote}
              placeholder="None"
            >
              {category && !newNote && category}
              {newNote && queryCategory}
            </TextContainer>
          </FieldInputContainer>
        </EditorSection>
        <EditorSection className="flex-grow-1">
          <TextContainer
            id="note-title"
            onBlur={(e) => setTitle(e.currentTarget.textContent)}
            style={{ fontSize: "40px" }}
            className="text-editor"
            contentEditable={editing || newNote}
            placeholder="Untitled"
          >
            {title && title}
          </TextContainer>
          <EditorColumnsContainer isMobile={isMobile}>
            <div>
              {(editing || newNote) && (
                <SectionText>MARKDOWN EDITOR</SectionText>
              )}

              {editing || newNote ? (
                <TextContainer
                  id="note-content"
                  suppressContentEditableWarning={true}
                  onInput={(e) => updatePreview(e)}
                  onBlur={(e) => setContent(e.target.textContent)}
                  className="text-editor flex-grow-1"
                  contentEditable={true}
                  placeholder="This supports Markdown!"
                  spellCheck="true"
                >
                  {content && content}
                </TextContainer>
              ) : (
                <NotePreview content={content} />
              )}
            </div>
            {editing && (
              <PreviewContainer>
                <SectionText>MARKDOWN PREVIEW</SectionText>
                <NotePreview content={previewContent} />
              </PreviewContainer>
            )}
          </EditorColumnsContainer>
        </EditorSection>
      </EditorContainer>
    </Router>
  );
};

export default NoteEditor;
