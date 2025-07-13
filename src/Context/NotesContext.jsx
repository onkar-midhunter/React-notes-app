import { createContext, useContext,useReducer } from "react";
import { noteReducer } from "../Reducer/noteReducer";

const NotesContext = createContext();
const NotesProvider = ({children}) =>{
  const InitialState = {
      Title: "",
      Text: "",
      notes: [],
      archive:[],
      bin:[]
    };
  
    const [{ Title, Text, notes ,archive,bin}, noteDispatch] = useReducer(
      noteReducer,
      InitialState
    );
 return(
  <NotesContext.Provider value={{Title,Text,notes,archive,bin,noteDispatch}}>
    {children}
  </NotesContext.Provider>
 )
}

const useNotes = ()=> useContext(NotesContext);
 

export {useNotes,NotesProvider}