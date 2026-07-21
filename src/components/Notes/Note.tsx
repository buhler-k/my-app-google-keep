
import React, {useState} from "react";

// interface NoteProps {
//     id:  "55";
//     title:"my other title" ;
//     text: "my other text";
// }

const Note = (props) => {


    const {toggleModal, note, setSelectedNote} = props;
    // const [setTitle] = useState(props.title)
    // let title= props.title;
    // let text = props.text;
   const noteClickHandler = () =>{
    toggleModal();
    setSelectedNote(note)
    
   };
   const deleteHandler = () => props.deleteNote(note.id);
    return (
        <div className="note" id="props.id" onClick={noteClickHandler}>
                    <span className="material-symbols-outlined check-circle">check_circle</span>
                    <div className="title">{note.title}</div>
                    <div className="text">{note.text}</div>

                    <div className="note-footer">

                        <div className="tooltip">

                            <span className="material-symbols-outlined hover small-icon">palette</span>
                            <span className="tooltip-text">Background options</span>

                        </div>

                        <div className="tooltip">

                            <span className="material-symbols-outlined hover small-icon">add_alert</span>
                            <span className="tooltip-text">Remind me</span>

                        </div>

                        <div className="tooltip">

                            <span className="material-symbols-outlined hover small-icon">person_add</span>
                            <span className="tooltip-text">Collaborator</span>

                        </div>

                        <div className="tooltip">

                            <span className="material-symbols-outlined hover small-icon">image</span>
                            <span className="tooltip-text">Add image</span>

                        </div>

                        <div className="tooltip archive" onClick={deleteHandler}>

                            <span className="material-symbols-outlined hover small-icon">archive</span>
                            <span className="tooltip-text">Archive</span>

                        </div>

                        <div className="tooltip">

                            <span className="material-symbols-outlined hover small-icon">more_vert</span>
                            <span className="tooltip-text">More</span>

                        </div>                    
                    </div>
                </div>
    )
}

export default Note;