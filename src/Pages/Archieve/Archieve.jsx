import { Fragment } from "react";
import { NotesCard } from "../../Component/NotesCard/NotesCard";
import { useNotes } from "../../Context/NotesContext";
import { Navbar } from "../../Component/Navbar/Navbar";
import Sidebar from "../../Component/SideBar/Sidebar";

// Archive.js
 function Archive() {
  const { archive, bin } = useNotes();

  return (
    <Fragment>
      <Navbar />
      <Sidebar />
     <main className="md:ml-64 md:pt-20 pt-20 px-4 md:px-6 bg-gray-50 min-h-screen pb-6">
  <div className="bg-white rounded-xl shadow-lg p-6 mt-6 md:mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-icons text-2xl text-indigo-600">archive</span>
            <h2 className="text-2xl font-bold text-gray-800">Archived Notes</h2>
          </div>

          {archive.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-icons text-5xl text-gray-300 mb-3">inbox</span>
              <p className="text-lg font-medium text-gray-500">No archived notes yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {archive.filter(note => !bin.some(b => b.id === note.id)).map((note) => (
                <NotesCard key={note.id} {...note} />
              ))}
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Archive