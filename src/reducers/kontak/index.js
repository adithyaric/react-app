import {
  GET_KONTAK_LIST,
  ADD_KONTAK_LIST,
  DELETE_KONTAK_LIST,
  DETAIL_KONTAK_LIST,
  UPDATE_KONTAK_LIST,
} from "../../actions/kontakAction";
const initialState = {
  getKontakResult: false,
  getKontakLoading: false,
  getKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,

  detailKontakResult: false,

  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakError: false,
};
const kontak = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_KONTAK_LIST:
      console.log("Get - Masuk Reducer", action);
      return {
        ...state,
        getKontakResult: action.payload.data,
        getKontakLoading: action.payload.loading,
        getKontakError: action.payload.errorMessage,
      };
    case ADD_KONTAK_LIST:
      console.log("Add - Masuk Reducer", action);
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakError: action.payload.errorMessage,
      };
    case DETAIL_KONTAK_LIST:
      console.log("Detail - Masuk Reducer", action);
      return {
        ...state,
        detailKontakResult: action.payload.data,
      };
    case UPDATE_KONTAK_LIST:
      console.log("Update - Masuk Reducer", action);
      return {
        ...state,
        updateKontakResult: action.payload.data,
        updateKontakLoading: action.payload.loading,
        updateKontakError: action.payload.errorMessage,
      };
    case DELETE_KONTAK_LIST:
      console.log("Delete - Masuk Reducer", action);
      return {
        ...state,
        deleteKontakResult: action.payload.data,
        deleteKontakLoading: action.payload.loading,
        deleteKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
