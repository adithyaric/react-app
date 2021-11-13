import {
  GET_KONTAK_LIST,
  ADD_KONTAK_LIST,
  DELETE_KONTAK_LIST,
  DETAIL_KONTAK_LIST,
  UPDATE_KONTAK_LIST
} from "../../actions/kontakAction";
const kontak = (state, action) => {
  const { type } = action;
  switch (type) {
    case GET_KONTAK_LIST:
      // console.log("4. Masuk Reducer", action);
      return {
        ...state,
        getKontakResult: action.payload.data,
        getKontakLoading: action.payload.loading,
        getKontakError: action.payload.errorMessage,
      };
    case ADD_KONTAK_LIST:
      // console.log("4. Masuk Reducer", action);
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakError: action.payload.errorMessage,
      };
    case DELETE_KONTAK_LIST:
      // console.log("4. Masuk Reducer", action);
      return {
        ...state,
        deleteKontakResult: action.payload.data,
        deleteKontakLoading: action.payload.loading,
        deleteKontakError: action.payload.errorMessage,
      };
    case DETAIL_KONTAK_LIST:
      // console.log("Masuk Reducer", action);
      return {
        ...state,
        detailKontakResult: action.payload.data,
      };
    case UPDATE_KONTAK_LIST:
      console.log("Masuk Reducer", action);
      return {
        ...state,
        updateKontakResult: action.payload.data,
        updateKontakLoading: action.payload.loading,
        updateKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
