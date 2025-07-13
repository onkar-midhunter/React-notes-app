import React from 'react';
import logo from '../../assets/note-app-image.jpeg';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center px-8 gap-4 bg-white shadow-lg border-b border-gray-200 z-50">
      <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-indigo-100">
        <img className="h-10 w-10 object-cover" src={logo} alt="note-app" />
      </div>
      <h1 className="text-indigo-800 text-3xl font-extrabold tracking-wide">NoteIt</h1>
    </header>
  );
};
