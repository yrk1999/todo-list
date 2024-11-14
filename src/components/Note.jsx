export default function Note(props) {
  return (
    <div
      className="note"
      key={props.key}
      onClick={() => {
        props.removeNote(props.title, props.content);
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
