import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";




const App = () => {
  const notes = [
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


  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form/>
      <Modal/>
      <Notes notes={notes} />
    </div>
  );
}

export default App;