// Bin.js (main content section)
import React, { Fragment } from 'react';
import { Navbar } from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/SideBar/Sidebar';
import { useNotes } from '../../Context/NotesContext';
import { NotesCard } from '../../Component/NotesCard/NotesCard';

const BinPage = () => {
  const { bin } = useNotes();
  
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <main className="md:ml-64 md:pt-20 pt-20 px-4 md:px-6 bg-gray-50 min-h-screen pb-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6 md:mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-icons text-2xl text-red-600">delete</span>
            <h2 className="text-2xl font-bold text-gray-800">Deleted Notes</h2>
          </div>

          {bin.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-icons text-5xl text-gray-300 mb-3">delete_outline</span>
              <p className="text-lg font-medium text-gray-500">Bin is empty</p>
              <p className="text-gray-400 mt-1">Deleted notes will appear here</p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-500">
                  {bin.length} note{bin.length !== 1 ? 's' : ''} in bin
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bin.map((note) => (
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
  );
}

export default BinPage;