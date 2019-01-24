let initialState = {
  totalBags : [],  
  searchUP:[],
  searchP:[]
}
export default function rootReducer (state = initialState, action) {
  switch(action.type){
    case "ADDDATA": 
    state.totalBags.push(
      {
        value: action.data,
        done: false
      }
    )
      return {
      ...state,
      totalBags: [...state.totalBags],   
    }
    case "CHANGECHECK": 
    state.totalBags[action.id].done = !state.totalBags[action.id].done;
    return {
        ...state,
        totalBags: [...state.totalBags],   
      }
    case "DELETE":
      state.totalBags.splice(action.id, 1)
      return {
        ...state,
        totalBags: [...state.totalBags],   
      }
   
    case "SEARCH_UNPACKED":
      let searchvalue = state.totalBags.reduce((acc,v)=>{
        if(!v.done){
          if(v.value.includes(action.value)){acc.push(v)}
        }
        return acc;
      },[])
      return {
        ...state, 
        searchUP: action.value ? searchvalue : []
      }
      case "SEARCH_PACKED":
      let searchpackedvalue = state.totalBags.reduce((acc,v)=>{
        if(v.done){
          if(v.value.includes(action.value)){acc.push(v)}
        } 
        return acc;
      },[])
      return {
        ...state, 
        searchP: action.value ? searchpackedvalue : []
      }
    default : 
    return state;
  }
}