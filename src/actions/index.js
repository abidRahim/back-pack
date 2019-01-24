export function addItem(data){
  return {
    type: "ADDDATA", data
    }
}
export function handleChange(id){
  return {
    type: "CHANGECHECK", id
    }
}
export function handleDelete(id){
  return {
    type: "DELETE", id
    }
}
export function searchUnpacked(value){
  return {
    type: "SEARCH_UNPACKED", value
  }
}
export function searchPacked(value){
  return {
    type: "SEARCH_PACKED", value
  }
}