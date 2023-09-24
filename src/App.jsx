import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-slate-100">
      <Sidebar/>
      <div className="p-7">
        <h1 className="text-2xl p-3">Dashboard</h1>
      </div>
    </div>
  );
}

export default App;
