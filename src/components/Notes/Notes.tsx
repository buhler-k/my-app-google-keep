import { useState, type DragEvent } from 'react';
import './Notes.css';
import Note from './Note';

interface NoteData {
    id: string;
    title: string;
    text: string;
}

interface NotesProps {
    notes: NoteData[];
    deleteNote: (id: string) => void;
    toggleModal: () => void;
    setSelectedNote: (note: NoteData) => void;
    reorderNotes: (sourceId: string, targetId: string) => void;
}

const Notes = (props: NotesProps) => {
    const { notes, deleteNote, toggleModal, setSelectedNote, reorderNotes } = props;
    const [draggedNoteId, setDraggedNoteId] = useState<string | null>(null);
    const [dropTargetId, setDropTargetId] = useState<string | null>(null);

    const handleDragStart = (noteId: string) => {
        setDraggedNoteId(noteId);
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (targetNoteId: string) => {
        if (!draggedNoteId || draggedNoteId === targetNoteId) {
            setDraggedNoteId(null);
            setDropTargetId(null);
            return;
        }

        reorderNotes(draggedNoteId, targetNoteId);
        setDraggedNoteId(null);
        setDropTargetId(null);
    };

    const handleDragEnd = () => {
        setDraggedNoteId(null);
        setDropTargetId(null);
    };

    return (
        <div className="notes">
            {notes.length === 0 ? (
                <div className="no-note">
                    <span className="material-symbols-outlined">lightbulb</span>
                    <h1>Notes you add appear here.</h1>
                </div>
            ) : (
                notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                        toggleModal={toggleModal}
                        setSelectedNote={setSelectedNote}
                        draggable
                        onDragStart={() => handleDragStart(note.id)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(note.id)}
                        onDragEnd={handleDragEnd}
                        onDragEnter={() => setDropTargetId(note.id)}
                        isDragging={draggedNoteId === note.id}
                        isDropTarget={dropTargetId === note.id}
                    />
                ))
            )}
        </div>
    );
};

export default Notes;