 import {v4 as uuid} from 'uuid'
 
 export const noteReducer = (state,{type,payload})=>{
switch(type){
  case 'TITLE':
    return{
      ...state,
      Title: payload
    }
  case 'TEXT':
    return{
      ...state,
      Text: payload
    }
  case 'ADD_NOTE':
    return{
      ...state,
      notes:[...state.notes,{Text:state.Text,Title:state.Title,id:uuid(),isPinned:false}]
    }
  case 'CLEAR_INPUT':
    return{
      ...state,
      Title:'',
      Text:''
    }
  case 'PIN':
    return{
      ...state,
      notes: state.notes.map(note => note.id === payload.id ? {...note,isPinned:true}:note)

    }
    case 'UNPIN':
    return{
      ...state,
      notes: state.notes.map(note => note.id === payload.id ? {...note,isPinned:false}:note)

    }
    case 'ADD_TO_ARCHIVE':
      return{
        ...state,
        archive: [...state.archive,state.notes.find(({id})=> id ===payload.id)],
        notes: state.notes.filter(({id})=> id !== payload.id)
      }
    case 'REMOVE_FROM_ARCHIVE':
      return{
        ...state,
         notes: [...state.notes,state.archive.find(({id})=>id === payload.id)],
        archive: state.archive.filter(({id})=>id !== payload.id)
       
      }
      case 'ADD_TO_BIN' :
        const noteBIn =
          state.notes.find(({id}) => id === payload.id) ||
          state.archive.find(({id})=> id === payload.id)
        return{
          ...state,
          bin: [...state.bin,noteBIn],
          notes: state.notes.filter(({id})=> id !== payload.id),
          archive: state.archive.filter(({id})=> id !== payload.id)
        }
      case 'REMOVE_FROM_BIN':
        return{
          ...state,
          bin: state.bin.filter(({id})=> id !== payload.id)
        
        }
  default:
    return state
}
}
