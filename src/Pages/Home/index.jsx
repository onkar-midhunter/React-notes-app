import { Fragment, useEffect } from "react";
import { useNotes } from "../../Context/NotesContext";
import { Navbar } from "../../Component/Navbar/Navbar";
import Sidebar from "../../Component/SideBar/Sidebar";
import { NotesCard } from "../../Component/NotesCard/NotesCard";

function Home() {
  const { Title, Text, notes, save,notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: 'TITLE',
      payload: e.target.value
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: 'TEXT',
      payload: e.target.value
    });
  };

  const onAddClick = () => {
    if (Title.trim() === '') return;
    
    notesDispatch({
      type: 'ADD_NOTE'
    });
    
    notesDispatch({
      type: 'CLEAR_INPUT'
    });
  };
  useEffect(() => {
  console.log("Current state:", { Title, Text, notes });
}, [Title, Text, notes]);

  const pinnedNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => isPinned) : [];
  const otherNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => !isPinned) : [];
  console.log(save)

  return (
    <Fragment>
      <Navbar/>
      <Sidebar />
      <main className="md:ml-64 md:pt-20 pt-20 px-4 md:px-6 bg-gray-50 min-h-screen flex flex-col md:flex-row gap-6 pb-6">
        {/* Note Input */}
        <div className="w-full md:w-80 p-5 bg-white rounded-xl shadow-lg mt-6 md:mt-20">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">New Note</h2>
          <div className="flex items-center gap-3 mb-4">
            <input
              type="text"
              onChange={onTitleChange}
              value={Title}
              placeholder="Title"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              disabled={Title.length === 0}
              onClick={onAddClick}
              className={`flex items-center justify-center p-3 rounded-lg shadow transition ${
                Title.length === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <textarea
            onChange={onTextChange}
            value={Text}
            placeholder="Write your note here..."
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Notes Display */}
        <div className="flex-1 mt-6 md:mt-20">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Notes</h2>
          
          {notes.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-icons text-5xl text-gray-300 mb-3">note_add</span>
              <p className="text-lg font-medium text-gray-500">No notes yet</p>
              <p className="text-gray-400 mt-1">Create your first note to get started</p>
            </div>
          ) : (
            <>
              {pinnedNotes.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-icons text-yellow-600">push_pin</span>
                    <h3 className="text-lg font-semibold text-gray-700">Pinned</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pinnedNotes.map((note) => (
                      <NotesCard key={note.id} {...note} />
                    ))}
                  </div>
                </div>
              )}

              {otherNotes.length > 0 && (
                <div>
                  {pinnedNotes.length > 0 && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-icons text-gray-600">notes</span>
                      <h3 className="text-lg font-semibold text-gray-700">Others</h3>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherNotes.map((note) => (
                      <NotesCard key={note.id} {...note} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Home;