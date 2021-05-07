export default function TypesReducer(state, action) {
  switch (action.type) {
    case 'setSelectedTypes':
      return { ...state, selectedTypes: action.selectedTypes }
    default:
      return state
  }
}
