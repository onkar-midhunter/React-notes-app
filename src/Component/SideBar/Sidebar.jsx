// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../Context/SidebarContext';

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  
  const getStyles = ({ isActive }) => {
    const base = 'flex items-center gap-3 px-4 py-3 rounded-lg text-base md:text-lg font-medium transition-colors duration-200';
    return isActive
      ? `bg-indigo-100 text-indigo-800 shadow ${base}`
      : `text-gray-700 hover:bg-indigo-50 hover:text-indigo-800 ${base}`;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Desktop sidebar (always visible) */}
      <aside 
        className={`hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 p-4 bg-white shadow-lg border-r border-gray-200 z-40`}
      >
        <div className="flex flex-col gap-1">
          <NavLink className={getStyles} to="/">
            <span className="material-icons-outlined text-2xl">house_siding</span>
            <span>Home</span>
          </NavLink>
          <NavLink className={getStyles} to="/archive">
            <span className="material-icons-outlined text-2xl">archive</span>
            <span>Archive</span>
          </NavLink>
          <NavLink className={getStyles} to="/important">
            <span className="material-icons-outlined text-2xl">bookmark</span>
            <span>Important</span>
          </NavLink>
          <NavLink className={getStyles} to="/bin">
            <span className="material-icons-outlined text-2xl">delete</span>
            <span>Bin</span>
          </NavLink>
        </div>
      </aside>

      {/* Mobile sidebar (slide-in) */}
      <aside 
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 p-4 bg-white shadow-lg border-r border-gray-200 z-40 transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:hidden`}
      >
        <div className="flex flex-col gap-1">
          <NavLink 
            className={getStyles} 
            to="/"
            onClick={toggleSidebar}
          >
            <span className="material-icons-outlined text-2xl">house_siding</span>
            <span>Home</span>
          </NavLink>
          <NavLink 
            className={getStyles} 
            to="/archive"
            onClick={toggleSidebar}
          >
            <span className="material-icons-outlined text-2xl">archive</span>
            <span>Archive</span>
          </NavLink>
          <NavLink 
            className={getStyles} 
            to="/important"
            onClick={toggleSidebar}
          >
            <span className="material-icons-outlined text-2xl">bookmark</span>
            <span>Important</span>
          </NavLink>
          <NavLink 
            className={getStyles} 
            to="/bin"
            onClick={toggleSidebar}
          >
            <span className="material-icons-outlined text-2xl">delete</span>
            <span>Bin</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar