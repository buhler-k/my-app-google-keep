import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";




const App = () => {
  let notes = [
    {
      id: "122",
      title: "s-title",
      text: "s-text"
    },

    {
      id: "123",
      title: "some-title",
      text: "some-text"
    },

    {
      id: "124",
      title: "title",
      text: "text"
    },

    {
      id: "125",
      title: "Title",
      text: "Texttt"
    }
]

const addNote = (note) => {
  notes=[
    ...notes,
    note
  ]
  
  console.log("notes", notes);
}

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form addNote={addNote} />
      <Modal/>
      <Notes notes={notes} />
    </div>
  );
}

export default App;