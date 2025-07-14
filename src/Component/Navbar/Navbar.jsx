// Navbar.js
import React from 'react';
import logo from '../../assets/note-app-image.jpeg';
import { useSidebar } from '../../Context/SidebarContext';

export const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center px-4 md:px-8 gap-4 bg-white shadow-md border-b border-gray-200 z-50">
      {/* Mobile menu button */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-md text-gray-600 hover:bg-indigo-50"
      >
        <span className="material-icons text-2xl">menu</span>
      </button>

      {/* Logo and app name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full overflow-hidden bg-indigo-100">
          <img className="h-8 w-8 md:h-10 md:w-10 object-cover" src={logo} alt="note-app" />
        </div>
        <h1 className="text-indigo-800 text-xl md:text-2xl font-bold tracking-tight">NoteIt</h1>
      </div>
    </header>
  )
}