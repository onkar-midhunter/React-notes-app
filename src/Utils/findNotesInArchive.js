export const findNoteInArchive = (archive ,id)=>{
    return archive.some(note => note.id === id);

  }