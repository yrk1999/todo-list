import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={props.title}
          onChange={(event) => {
            props.updateNote(event.target.name, event.target.value);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
          onChange={(event) => {
            props.updateNote(event.target.name, event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            props.updateNewNote();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
