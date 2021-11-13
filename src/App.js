import { ListKontak, FormKontak } from "./components";

function App() {
  return (
    <div className="p-14 divide-y">
      <div className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Kontak App
        <FormKontak />
      </div>
      <ListKontak />
    </div>
  );
}

export default App;
