export const findDeleteInNotes = (bin,id) =>{
  
  return bin.some(note => note && note.id === id)
}