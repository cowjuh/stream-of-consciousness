import marked from 'marked';
import sanitizeHtml from 'sanitize-html';
import './markdown.css';

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
    'img',
    'h1',
    'h2',
    'h3',
]);

const allowedAttributes = Object.assign(
{},
sanitizeHtml.defaults.allowedAttributes,
{
    img: ['alt', 'src'],
}
);

const styles = {
    p: {
        color: "blue"
    }
}

export default function MarkdownText({text}) {
return (
    <div
    style={styles}
    dangerouslySetInnerHTML={{
        __html: sanitizeHtml(marked(text), {
        allowedTags,
        allowedAttributes,
        }),
    }}
    />
);
}