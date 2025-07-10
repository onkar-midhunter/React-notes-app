import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const getStyles = ({ isActive }) => {
    const base =
      "flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200";
    return isActive
      ? `bg-indigo-100 text-indigo-800 shadow ${base}`
      : `text-gray-700 hover:bg-indigo-50 hover:text-indigo-800 ${base}`;
  };

  return (
    <aside className="flex flex-col gap-2 fixed top-16 left-0 h-[calc(100vh-4rem)] w-48 p-4 bg-white shadow-lg border-r border-gray-200 z-40">
      <NavLink className={getStyles} to="/">
        <span className="material-symbols-outlined text-2xl">house_siding</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-symbols-outlined text-2xl">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <span className="material-symbols-outlined text-2xl">bookmark_check</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <span className="material-symbols-outlined text-2xl">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
}

export default Sidebar;
