import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";


function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form/>
      <Modal/>
      <Notes/>
    </div>
  );
}

export default App;