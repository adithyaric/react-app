import axios from "axios";

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";
export const ADD_KONTAK_LIST = "ADD_KONTAK_LIST";
export const DELETE_KONTAK_LIST = "DELETE_KONTAK_LIST";
export const DETAIL_KONTAK_LIST = "DETAIL_KONTAK_LIST";
export const UPDATE_KONTAK_LIST = "UPDATE_KONTAK_LIST";

export const getKontakList = () => {
  console.log("Masuk Get Action!");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_KONTAK_LIST,
      payload: { loading: true, data: false, errorMessage: false },
    });

    //Get data from json-server
    axios({
      method: "GET",
      url: "http://localhost:3001/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        console.log("Berhasil Get : ", response);
        dispatch({
          type: GET_KONTAK_LIST,
          payload: { loading: false, data: response.data, errorMessage: false },
        });
      })
      .catch((error) => {
        console.log("Gagal Get : ", error.message);
        dispatch({
          type: GET_KONTAK_LIST,
          payload: { loading: false, data: false, errorMessage: error.message },
        });
      });
  };
};
export const addKontak = (data) => {
  console.log("Masuk Add Action!");
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_KONTAK_LIST,
      payload: { loading: true, data: false, errorMessage: false },
    });

    //Get data from json-server
    axios({
      method: "POST",
      url: "http://localhost:3001/kontaks",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("Berhasil POST : ", response);
        dispatch({
          type: ADD_KONTAK_LIST,
          payload: { loading: false, data: response.data, errorMessage: false },
        });
      })
      .catch((error) => {
        console.log("Gagal POST : ", error.message);
        dispatch({
          type: ADD_KONTAK_LIST,
          payload: { loading: false, data: false, errorMessage: error.message },
        });
      });
  };
};
export const deleteKontak = (id) => {
  console.log("Masuk Action delete!");
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE_KONTAK_LIST,
      payload: { loading: true, data: false, errorMessage: false },
    });

    //Get data from json-server
    axios({
      method: "DELETE",
      url: "http://localhost:3001/kontaks/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("Berhasil DELETE : ", response);
        dispatch({
          type: DELETE_KONTAK_LIST,
          payload: { loading: false, data: response.data, errorMessage: false },
        });
      })
      .catch((error) => {
        console.log("Gagal DELETE : ", error.message);
        dispatch({
          type: DELETE_KONTAK_LIST,
          payload: { loading: false, data: false, errorMessage: error.message },
        });
      });
  };
};
export const detailKontak = (data) => {
  console.log("Masuk Detail Action!");
  //loading
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK_LIST,
      payload: { data: data },
    });
  };
};
export const editKontak = (data) => {
  console.log("Masuk Update Action!");
  //loading
  return (dispatch) => {
    dispatch({
      type: UPDATE_KONTAK_LIST,
      payload: { loading: true, data: false, errorMessage: false },
    });

    //Get data from json-server
    axios({
      method: "PUT",
      url: "http://localhost:3001/kontaks/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("Berhasil PUT : ", response);
        dispatch({
          type: UPDATE_KONTAK_LIST,
          payload: { loading: false, data: response.data, errorMessage: false },
        });
      })
      .catch((error) => {
        console.log("Gagal PUT : ", error.message);
        dispatch({
          type: UPDATE_KONTAK_LIST,
          payload: { loading: false, data: false, errorMessage: error.message },
        });
      });
  };
};
