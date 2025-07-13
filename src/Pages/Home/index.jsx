import React, { Fragment } from "react";
import { Navbar } from "../../Component/Navbar/Navbar";
import Sidebar from "../../Component/SideBar/Sidebar";
import { NotesCard } from "../../Component/NotesCard/NotesCard";
import { useNotes } from "../../Context/NotesContext";

function Home() {
  const { Title, Text, notes,archive, bin,noteDispatch } = useNotes();

  const onTitleChange = (e) => {
    noteDispatch({ type: "TITLE", payload: e.target.value });
  };

  const onTextChange = (e) => {
    noteDispatch({ type: "TEXT", payload: e.target.value });
  };

  const onAddClick = () => {
    noteDispatch({ type: "ADD_NOTE" });
    noteDispatch({ type: "CLEAR_INPUT" });
  };

  // ✅ Correct spelling of length
  const pinnedNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => isPinned) : [];
  const otherNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => !isPinned) : [];
console.log(bin)
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <main className="pl-48 pt-20 px-6 bg-gray-100 min-h-screen flex gap-6">
        {/* Note Input */}
        <div className="flex flex-col w-[350px] p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add a New Note</h2>
          <div className="flex items-center gap-3 mb-4">
            <input
              type="text"
              onChange={onTitleChange}
              value={Title}
              placeholder="Title"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              disabled={Title.length === 0}
              onClick={onAddClick}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg shadow transition-all ${
                Text.length === 0 && Title.length === 0
                  ? "bg-gray-300 text-white cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              <span className="material-symbols-outlined text-xl">add</span>
            </button>
          </div>
          <textarea
            onChange={onTextChange}
            value={Text}
            placeholder="Write your note here..."
            rows="5"
            className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Notes Display */}
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Notes</h2>
          {notes.length === 0 ? (
            <p className="text-gray-500 italic">No notes added yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {/* 📌 Pinned Notes */}
              {pinnedNotes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-2">Pinned</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {pinnedNotes.map(({ id, Title, Text, isPinned }) => (
                      <NotesCard key={id} id={id} Title={Title} Text={Text} isPinned={isPinned} />
                    ))}
                  </div>
                  <hr className="my-4 border-gray-300" />
                </div>
              )}

              {/* 🗒️ Other Notes */}
              {otherNotes.length > 0 && (
                <div>
                  {pinnedNotes.length > 0 && (
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Others</h3>
                  )}
                  <div className="grid grid-cols-1 gap-4">
                    {otherNotes.map(({ id, Title, Text, isPinned }) => (
                      <NotesCard key={id} id={id} Title={Title} Text={Text} isPinned={isPinned} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Home;
