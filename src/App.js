import { ListKontak, FormKontak } from "./components";

function App() {
  return (
    <div className="p-16 divide-y">
      <div className="p-8 text-center text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Kontak App
      </div>
        <FormKontak />
        <hr />
      <ListKontak />
    </div>
  );
}

export default App;
