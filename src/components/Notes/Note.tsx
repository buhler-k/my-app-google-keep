
import { type DragEvent } from 'react';

interface NoteData {
    id: string;
    title: string;
    text: string;
}

interface NoteProps {
    toggleModal: () => void;
    note: NoteData;
    setSelectedNote: (note: NoteData) => void;
    deleteNote: (id: string) => void;
    draggable?: boolean;
    onDragStart?: () => void;
    onDragOver?: (event: DragEvent<HTMLDivElement>) => void;
    onDrop?: () => void;
    onDragEnd?: () => void;
    onDragEnter?: () => void;
    isDragging?: boolean;
    isDropTarget?: boolean;
}

const Note = (props: NoteProps) => {
    const {
        toggleModal,
        note,
        setSelectedNote,
        deleteNote,
        draggable,
        onDragStart,
        onDragOver,
        onDrop,
        onDragEnd,
        onDragEnter,
        isDragging,
        isDropTarget,
    } = props;

    const noteClickHandler = () => {
        toggleModal();
        setSelectedNote(note);
    };

    const deleteHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        deleteNote(note.id);
    };

    return (
        <div
            className={`note ${isDragging ? 'note-dragging' : ''} ${isDropTarget ? 'note-drop-target' : ''}`}
            id={note.id}
            onClick={noteClickHandler}
            draggable={draggable}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
        >
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
    );
};

export default Note;