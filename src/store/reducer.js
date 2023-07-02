const intialState = {
  language: "English",
  loader: "false",
  movies: [],
  isLoggedIn: false,
};

//reducer in store
export default function languageReducer(state = intialState, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
      break;
    case "SET_LOADER":
      return { ...state, loader: action.payload };
      break;
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
      break;
      case "SET_LOGGED":
        return { ...state, isLoggedIn: action.payload };
        break;
    default:
      return state;
      break;
  }
}
