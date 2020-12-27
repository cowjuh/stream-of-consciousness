import MarkdownText from './MarkdownText';

export default function NotePreview({content}) {
    return(
        <div>
            <MarkdownText text={content}/>
        </div>
    )
}