import { useEffect, useState } from "react";
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
  const [noteSearch, setNoteSearch] = useState("");

  const handleSearch = (text: string) => {
    setNoteSearch (text);
  };

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

  useEffect(() => {
    document.documentElement.classList.toggle("app-dark", isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const reorderNotes = (sourceId: string, targetId: string) => {
    setNotes((prevNotes) => {
      const sourceIndex = prevNotes.findIndex((note) => note.id === sourceId);
      const targetIndex = prevNotes.findIndex((note) => note.id === targetId);

      if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) {
        return prevNotes;
      }

      const nextNotes = [...prevNotes];
      const [movedNote] = nextNotes.splice(sourceIndex, 1);
      nextNotes.splice(targetIndex, 0, movedNote);

      return nextNotes;
    });

  };

  const filteredNotes = notes.filter((note) => {
    if (!noteSearch) return true;
    const query = noteSearch.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.text.toLowerCase().includes(query)
    );
  });

  return (
    <div className={`app ${isDarkMode ? 'app-dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} setNoteSearch={handleSearch} />
      <Sidebar/>
      <Form addNote={addNote} />
      <Notes notes={filteredNotes} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote} reorderNotes={reorderNotes} />
      {
        isModalOpen && (<Modal isModalOpen = {isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>)
      }
    </div>
  );
};

export default App;