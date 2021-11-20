import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getKontakList,
  deleteKontak,
  detailKontak,
} from "../../actions/kontakAction";

function ListKontak() {
  const {
    getKontakResult,
    getKontakLoading,
    getKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //get list kontak
    console.log("ListKontak use effect component did mount");
    dispatch(getKontakList());
  }, [dispatch]);

  // Delete
  useEffect(() => {
    if (deleteKontakResult) {
      console.log("--- Component Did Mount deleteKontakResult");
      dispatch(getKontakList());
    }
  }, [deleteKontakResult, dispatch]);
  return (
    <div>
      <div className="font-bold">List kontak</div>
      {getKontakResult ? (
        getKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1"
                onClick={() => dispatch(detailKontak(kontak))}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => dispatch(deleteKontak(kontak.id))}
              >
                Delete
              </button>
            </p>
          );
        })
      ) : getKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getKontakError ? getKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}
export default ListKontak;
