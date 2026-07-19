import './Notes.css';
import Note from './Note';

const Notes =(props) =>{
    console.log("props",props.notes[0]);
    const { notes } = props;
    return (
        <div className="notes">
            <Note id={notes[0].id} title={notes[0].title} text={notes[0].text}/>
            <Note id={notes[1].id} title={notes[1].title} text={notes[1].text}/>
            <Note id={notes[2].id} title={notes[2].title} text={notes[2].text}/>
            <Note id={notes[3].id} title={notes[3].title} text={notes[3].text}/>

        </div>
    )
}

export default Notes;