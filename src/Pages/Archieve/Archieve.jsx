import React, { Fragment } from "react";
import { Navbar } from "../../Component/Navbar/Navbar";
import Sidebar from "../../Component/SideBar/Sidebar";
import { useNotes } from "../../Context/NotesContext";
import { NotesCard } from "../../Component/NotesCard/NotesCard";

function Archive() {
  const { archive,bin } = useNotes();

  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <main className="pl-48 pt-20 px-6 bg-gray-100 min-h-screen flex gap-6">
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Archived Notes
          </h2>

          {archive.length === 0 ? (
            <p className="text-center text-lg font-semibold text-gray-500 italic">
              No notes archived yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {archive.filter(note => !bin.some(b => b.id === note.id)).
              map(({ id, Title, Text, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  Title={Title}
                  Text={Text}
                  isPinned={isPinned}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Archive;
