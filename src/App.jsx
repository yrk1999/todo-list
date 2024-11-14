//import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import { useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });
  function updateNote(name, value) {
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function removeNote(title, content) {
    setAllNotes(
      allNotes.filter((item, index) => {
        /* console.log(title);
      console.log(content);

      console.log(item.title == title);
      console.log(item.content == content);
 */
        return item.title !== title && item.content !== content;
      })
    );
    setNote({ title: "", content: "" });
  }
  function updateNewNote() {
    setAllNotes((previousAllNotes) => {
      return [...previousAllNotes, note];
    });
    setNote({ title: "", content: "" });
  }
  return (
    <>
      <Header></Header>
      <CreateArea
        title={note.title}
        content={note.content}
        updateNote={updateNote}
        updateNewNote={updateNewNote}
      />
      {allNotes.map((element, index) => {
        return (
          <Note
            key={index}
            title={element.title}
            content={element.content}
            removeNote={removeNote}
          ></Note>
        );
      })}
      <Footer></Footer>
    </>
  );
}

export default App;
