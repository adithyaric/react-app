import React, { useEffect } from "react";
import { detailKontak, deleteKontak, getKontakList } from "../../actions/kontakAction";
import { useAppState } from "../../contexts/appState";

function ListKontak() {
  const [state, dispatch] = useAppState();
  const {
    getKontakResult,
    getKontakLoading,
    getKontakError,
    deleteKontakResult,
  } = state;

  useEffect(() => {
    // console.log("1. Component Did Mount getKontakList");
    getKontakList(dispatch);
  }, [dispatch]);
  useEffect(() => {
    if (deleteKontakResult) {
      // console.log("1. Component Did Mount deleteKontakResult");
      getKontakList(dispatch);
    }
  }, [dispatch, deleteKontakResult]);
  return (
    <div className="">
      <div className="font-bold">List kontak</div>
      {getKontakResult ? (
        getKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1"
                onClick={() => detailKontak(dispatch, kontak)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => deleteKontak(dispatch, kontak.id)}
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
