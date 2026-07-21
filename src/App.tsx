import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";
import './responsive.css';


 const NOTES = [
    // {
    //   id: "122",
    //   title: "s-title",
    //   text: "some-text"
    // },
    // {
    //   id: "12",
    //   title: "diff-title",
    //   text: "another-text"
    // },

]

const App = () => {
  const [notes, setNotes] = useState(NOTES)
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...notes,note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => id !== note.id)
    });
  };

  const toggleModal = () =>{
    setIsModalOpen(prevState =>{
      return !prevState
    });
  }

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form addNote={addNote} />
      <Notes notes={notes} deleteNote = {deleteNote} toggleModal={toggleModal} setSelectedNote = {setSelectedNote}/>
      {
        isModalOpen && (<Modal isModalOpen = {isModalOpen} selectedNote={selectedNote}/>)
      }
    </div>
  );
}

export default App;