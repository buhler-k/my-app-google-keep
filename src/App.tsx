import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";
import './responsive.css';

interface Note {
  id: string;
  title: string;
  text: string;
}

const NOTES: Note[] = [];

const App = () => {
  const [notes, setNotes] = useState<Note[]>(NOTES)
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addNote = (note: Note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const editNote = (editedNote: Note) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          return { ...note, title: editedNote.title, text: editedNote.text };
        }
        return note;
      });
    });
  };

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => id !== note.id));
  };

  const toggleModal = () =>{
    setIsModalOpen(prevState =>{
      return !prevState
    });
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div className={`app ${isDarkMode ? 'app-dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Sidebar/>
      <Form addNote={addNote} />
      <Notes notes={notes} deleteNote = {deleteNote} toggleModal={toggleModal} setSelectedNote = {setSelectedNote}/>
      {
        isModalOpen && (<Modal isModalOpen = {isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>)
      }
    </div>
  );
}

export default App;