import CityPage from "./components/CityPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container-fluid vh-100 ps-0">
        <div className="row">
          {/* Sidebar */}
          <div className="col-auto">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col">
            <div className="p-4"></div>
            <CityPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
