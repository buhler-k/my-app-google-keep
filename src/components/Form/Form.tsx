import {useState} from "react";
import './Form.css';
import { v4 as uuidv4 } from 'uuid';


const Form = (props)=> {
    const { edit, selectedNote } = props;
    const [title, setTitle] = useState(edit && selectedNote.title || "");
    const [text, setText] = useState(edit && selectedNote.text || "");
    const [isActiveForm, setIsActiveForm] = useState(edit)

    const titleChangeHandler = (event) => setTitle(event.target.value);
    const textChangeHandler = (event) => setText(event.target.value);
    // const [isActiveForm, setIsActiveForm] = useState(false);

    const submitFormHandler =(event) => {
        event.preventDefault();
        
        const note= {
            id: uuidv4(),
            title,
            text
        };
        
        props.addNote(note)
        setTitle("");
        setText("");
    }

    const formClickHandler = () =>{
        setIsActiveForm(true);
    }
    
    return (
        <div>
            <div className="form-container active-form" onClick={formClickHandler}>
                <form onSubmit={submitFormHandler} className={isActiveForm ? "form" : ""} id="form">
                {
                    isActiveForm && (
                    <input 
                    onChange={titleChangeHandler}
                    value={title}
                    id="note-title"
                    type="text"
                    className="note-title" 
                    placeholder="Title"
                    />
                )}

                <input onChange={textChangeHandler} value={text} id="note-text" type="text" className="note-text" placeholder="Take a note..." />
                {
                    isActiveForm? (
                        <div className="form-actions active-actions">
                            <div className="icons">
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon">text_format</span>
                                    <span className="tooltip-text">Formatting Options</span>

                                </div>

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

                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon">archive</span>
                                    <span className="tooltip-text">Archive</span>

                                </div>

                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon">more_vert</span>
                                    <span className="tooltip-text">More</span>

                                </div>

                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon">undo</span>
                                    <span className="tooltip-text">Undo</span>

                                </div>

                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icon">redo</span>
                                    <span className="tooltip-text">Redo</span>

                                </div>

                            </div>
                            <button type="submit" className="close-btn" id="modal-btn">Close</button>
                    
                        </div>

                        
                    ): (
                        <div className="form-actions inactive-actions">
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover">check_box</span>
                                <span className="tooltip-text">New list</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover">brush</span>
                                <span className="tooltip-text">New note with drawing</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover">image</span>
                                <span className="tooltip-text">New note with image</span>
                            </div>
                        </div>

                    )}
                    
            </form>
            </div>
           

            
        </div>
    );
};

export default Form;
            //         <div className="form-container inactive-form" onClick={formClickHandler}>
            //     <form>
            //         <input type="text" className="note-text" placeholder="Take a note..." />
            //         <div className="form-actions">
            //             <div className="tooltip">
            //                 <span className="material-symbols-outlined hover">check_box</span>
            //                 <span className="tooltip-text">New list</span>
            //             </div>
            //             <div className="tooltip">
            //                 <span className="material-symbols-outlined hover">brush</span>
            //                 <span className="tooltip-text">New note with drawing</span>
            //             </div>
            //             <div className="tooltip">
            //                 <span className="material-symbols-outlined hover">image</span>
            //                 <span className="tooltip-text">New note with image</span>
            //             </div>

    
            //         </div>
            //     </form>
        
        
            // </div>