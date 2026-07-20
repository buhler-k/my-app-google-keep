import './Notes.css';
import Note from './Note';

const Notes =(props) =>{
    const { notes } = props;
    return (
        <div className="notes">
            {notes.length ===0 ? 
            (
                <div className="no-note">
                    <span className="material-symbols-outlined">lightbulb</span>
                    <h1>Notes you add appear here.</h1>
                </div>
            
            ): (
                notes.map(( note, index) => <Note key={index} id={note.id} title={note.title} text={note.text} />)
            )}


        </div>
    )
}

export default Notes;