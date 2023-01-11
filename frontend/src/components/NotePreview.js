import MarkdownText from "./MarkdownText";
import styled from "styled-components";

const PreviewContainer = styled.div`
  max-width: 750px;
`;

export default function NotePreview({ content }) {
  return (
    <PreviewContainer>
      <MarkdownText text={content} />
    </PreviewContainer>
  );
}
