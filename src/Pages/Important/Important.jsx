import React, { Fragment } from 'react'
import { Navbar } from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/SideBar/Sidebar';
import { useNotes } from '../../Context/NotesContext';
import { NotesCard } from '../../Component/NotesCard/NotesCard';

function Important() {
  const {save} = useNotes();
  return (
     <Fragment>
      <Navbar />
      <Sidebar />
      <main className="md:ml-64 md:pt-20 pt-20 px-4 md:px-6 bg-gray-50 min-h-screen pb-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6 md:mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-icons text-2xl text-black">bookmark</span>
            <h2 className="text-2xl font-bold text-gray-800">Important Notes</h2>
          </div>

          {save.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-icons text-5xl text-gray-300 mb-3">bookmark</span>
              <p className="text-lg font-medium text-gray-500">Important Sections is Empty</p>
              <p className="text-gray-400 mt-1">Important notes will appear here</p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-500">
                  {save.length} note{save.length !== 1 ? 's' : ''} in Important
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {save.map((note) => (
                  <NotesCard
                    key={note.id} 
                    id={note.id}
                    Title={note.Title}
                    Text={note.Text}
                    isPinned={note.isPinned}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </Fragment>
  )
}

export default Important