import React, { useEffect, useState } from "react";
import { useAppState } from "../../contexts/appState";
import {
  addKontak,
  editKontak,
  getKontakList,
} from "../../actions/kontakAction";

function FormKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");
  const [state, dispatch] = useAppState();
  const { addKontakResult, detailKontakResult, updateKontakResult } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Masuk Handle Submit");
    if (id) {
      //update
      editKontak(dispatch, { nama: nama, nohp: nohp, id: id });
    } else {
      addKontak(dispatch, { nama: nama, nohp: nohp });
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      getKontakList(dispatch);
      setNama("");
      setNohp("");
      setId("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      console.log("Masuk Form Kontak");
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult]);

  useEffect(() => {
    if (updateKontakResult) {
      getKontakList(dispatch);
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);
  return (
    <div>
      <div className="font-bold">{id ? "Edit Kontak" : "Add kontak"}</div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          id=""
          placeholder="Nama..."
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="text"
          name="nohp"
          id=""
          placeholder="No HP..."
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default FormKontak;
