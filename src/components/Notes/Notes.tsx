import './Notes.css';
import Note from './Note';

const Notes =(props) =>{
    const { notes } = props;
    return (
        <div className="notes">
            {
                notes.map(( note, index) => <Note key={index} id={note.id} title={note.title} text={note.text} />)
            }


        </div>
    )
}

export default Notes;