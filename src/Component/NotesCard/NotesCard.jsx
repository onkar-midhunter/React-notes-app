import { useNotes } from "../../Context/NotesContext";
import { findDeleteInNotes } from "../../Utils/findDeleteInNotes";
import { findNoteInArchive } from "../../Utils/findNotesInArchive";

export const NotesCard = ({ id, Title, Text, isPinned }) => {
  const { noteDispatch ,archive,bin} = useNotes();

  

  const isNoteInArchive = findNoteInArchive(archive,id)
  const isNoteInDelete = findDeleteInNotes(bin,id)

  const onPinClick = (id) => {
    !isPinned
      ? noteDispatch({
          type: "PIN",
          payload: { id },
        })
      : noteDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };
  const onArchiveClcik = (id) => {
    !isNoteInArchive ?
    noteDispatch({
      type: "ADD_TO_ARCHIVE",
      payload: { id },
    }) : noteDispatch({
      type:"REMOVE_FROM_ARCHIVE",
      payload:{id}
    })
  };

  const onDeleteClick = (id)=>{
   !isNoteInDelete ?
    noteDispatch({
      type:'ADD_TO_BIN',
      payload:{id}
    }) : noteDispatch({
      type: "REMOVE_FROM_BIN",
      payload: {id}
    })
  }

  return (
    <div
      key={id}
      className="p-4 bg-gray-50 border rounded-lg shadow-sm flex flex-col gap-2"
    >{!isNoteInArchive && !isNoteInDelete &&
    <div className="flex items-start justify-between">
        <h3 className="font-bold text-lg text-gray-800">{Title}</h3>
        <button
          onClick={() => onPinClick(id)}
          title={isPinned ? "Pinned" : "Mark as Important"}
          className={`p-1 rounded-full transition ${
            isPinned
              ? " text-yellow-700 hover:bg-yellow-100"
              : "hover:bg-yellow-100 text-yellow-600 hover:text-yellow-700"
          }`}
        >
          <span
            className={
              isPinned
                ? "material-icons text-xl"
                : "material-icons-outlined text-xl"
            }
          >
            push_pin
          </span>
        </button>
      </div>}
      

      <p className="text-gray-600">{Text}</p>

      <div className="flex justify-end gap-2 pt-2">
        {
          !isNoteInDelete && 
          <button
          onClick={() => onArchiveClcik(id)}
          title="Archive"
          className="p-2 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-700 transition"
        >
          <span className={
            isNoteInArchive ? "material-icons text-xl"
                : "material-icons-outlined text-xl"
          }>archive</span>
        </button>
        }
        <button
         onClick={()=>onDeleteClick(id)}
          title="Delete"
          className="p-2 rounded-full hover:bg-red-100 text-red-600 hover:text-red-700 transition"
        >
          <span className={isNoteInDelete ? "material-icons text-xl" : "material-icons-outlined text-xl"}>delete</span>
        </button>
      </div>
    </div>
  );
};
