import axios from "axios";

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";
export const ADD_KONTAK_LIST = "ADD_KONTAK_LIST";
export const DELETE_KONTAK_LIST = "DELETE_KONTAK_LIST";
export const DETAIL_KONTAK_LIST = "DETAIL_KONTAK_LIST";
export const UPDATE_KONTAK_LIST = "UPDATE_KONTAK_LIST";

export const getKontakList = (dispatch) => {
  // console.log("2. Masuk Action!");
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
      // console.log("3. Berhasil Get : ", response);
      dispatch({
        type: GET_KONTAK_LIST,
        payload: { loading: false, data: response.data, errorMessage: false },
      });
    })
    .catch((error) => {
      // console.log("3. Gagal Get : ", error.message);
      dispatch({
        type: GET_KONTAK_LIST,
        payload: { loading: false, data: false, errorMessage: error.message },
      });
    });
};
export const addKontak = (dispatch, data) => {
  // console.log("2. Masuk Action!");
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
      // console.log("3. Berhasil POST : ", response);
      dispatch({
        type: ADD_KONTAK_LIST,
        payload: { loading: false, data: response.data, errorMessage: false },
      });
    })
    .catch((error) => {
      // console.log("3. Gagal POST : ", error.message);
      dispatch({
        type: ADD_KONTAK_LIST,
        payload: { loading: false, data: false, errorMessage: error.message },
      });
    });
};
export const deleteKontak = (dispatch, id) => {
  // console.log("2. Masuk Action!");
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
      // console.log("3. Berhasil DELETE : ", response);
      dispatch({
        type: DELETE_KONTAK_LIST,
        payload: { loading: false, data: response.data, errorMessage: false },
      });
    })
    .catch((error) => {
      // console.log("3. Gagal DELETE : ", error.message);
      dispatch({
        type: DELETE_KONTAK_LIST,
        payload: { loading: false, data: false, errorMessage: error.message },
      });
    });
};
export const detailKontak = (dispatch, data) => {
  console.log("1. Masuk Detail Action!");
  //loading
  dispatch({
    type: DETAIL_KONTAK_LIST,
    payload: { data: data },
  });
};
export const editKontak = (dispatch, data) => {
  console.log("2. Masuk Action!");
  //loading
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
      console.log("3. Berhasil PUT : ", response);
      dispatch({
        type: UPDATE_KONTAK_LIST,
        payload: { loading: false, data: response.data, errorMessage: false },
      });
    })
    .catch((error) => {
      console.log("3. Gagal PUT : ", error.message);
      dispatch({
        type: UPDATE_KONTAK_LIST,
        payload: { loading: false, data: false, errorMessage: error.message },
      });
    });
};
