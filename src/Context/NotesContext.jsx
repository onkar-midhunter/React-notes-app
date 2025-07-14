import { createContext, useContext, useReducer } from "react";
import { NotesReducer } from "./Reducer/NotesReducer";

const NotesContext = createContext();

const initialState = {
  notes: [],
  archive: [],
  bin: [],
  save:[],
  Title: '',
  Text: ''
};

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, initialState);

  return (
    <NotesContext.Provider value={{
      ...state,
      notesDispatch: dispatch
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);