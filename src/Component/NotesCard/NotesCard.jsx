import { useNotes } from "../../Context/NotesContext";
import { findDeleteInNotes } from "../../Utils/findDeleteInNotes";
import { findNoteInImportant } from "../../Utils/findNoteInImportant";
import { findNoteInArchive } from "../../Utils/findNotesInArchive";

export const NotesCard = ({ id, Title, Text, isPinned }) => {
  const { notesDispatch , archive, bin ,save} = useNotes();

  const isNoteInArchive = findNoteInArchive(archive, id);
  const isNoteInDelete = findDeleteInNotes(bin, id);
  const isNoteInImportant = findNoteInImportant(save,id)

    const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };
  const onArchiveClcik = (id) => {
    !isNoteInArchive ?
    notesDispatch({
      type: "ADD_TO_ARCHIVE",
      payload: { id },
    }) : notesDispatch({
      type:"REMOVE_FROM_ARCHIVE",
      payload:{id}
    })
  };

  const onDeleteClick = (id)=>{
   !isNoteInDelete ?
    notesDispatch({
      type:'ADD_TO_BIN',
      payload:{id}
    }) : notesDispatch({
      type: "REMOVE_FROM_BIN",
      payload: {id}
    })
  }
  const onClickSaveButon = (id) =>{
    !isNoteInImportant ?
    notesDispatch({
      type:"ADD_TO_SAVE",
      payload:{id}
    }): notesDispatch({
      type:'REMOVE_FROM_SAVE',
      payload:{id}
    })
  }

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col gap-3 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <h3 className="font-bold text-lg text-gray-800 truncate">{Title}</h3>
        {!isNoteInArchive && !isNoteInDelete && !isNoteInImportant &&
        (
          <button
            onClick={() => onPinClick(id)}
            className={`p-1.5 rounded-full transition ${
              isPinned
                ? "bg-yellow-100 text-yellow-700"
                : "text-gray-400 hover:bg-gray-100"
            }`}
          >
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        )}
      </div>

      <p className="text-gray-600 text-sm line-clamp-4 flex-grow">{Text}</p>

      <div className="flex justify-end gap-2 pt-1">
        {!isNoteInDelete && !isNoteInImportant && (
          <button
            onClick={() => onArchiveClcik(id)}
            className={`p-2 rounded-full transition ${
              isNoteInArchive
                ? " text-blue-700"
                : "text-gray-500 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            <span className="material-icons text-xl">
              {isNoteInArchive ? "unarchive" : "archive"}
            </span>
          </button>
        )}
        
        {
          !isNoteInDelete && <button
          onClick={() =>onClickSaveButon(id)}
          className={`p-2 rounded-full transition ${
            isNoteInImportant
              ? " text-black"
              : "text-gray-500 hover:bg-red-50 hover:text-gray-700"
          }`}
        >
          <span className={isNoteInImportant ? "material-icons text-xl":"material-icons-outlined text-xl"}>
           
            bookmark
          </span>
          
        </button>
        }
        <button
          onClick={() => onDeleteClick(id)}
          className={`p-2 rounded-full transition ${
            isNoteInDelete
              ? " text-red-700"
              : "text-red-400 hover:bg-red-50 hover:text-red-700"
          }`}
        >
          <span className={isNoteInDelete ? "material-icons text-xl":"material-icons-outlined text-xl"}>
            {/* {isNoteInDelete ? "restore_from_trash" : "delete"} */}
            delete
          </span>
        </button>
      </div>
    </div>
  );
};
