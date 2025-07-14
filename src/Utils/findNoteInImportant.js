export const findNoteInImportant = (save ,id)=>{
    return save.some(note => note.id === id);

  }