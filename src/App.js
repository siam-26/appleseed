
import Sidebar from './Sidebar/Sidebar';
import Homes from './pages/home/Homes';
function App() {
  return (
    <div className="App bg-[#0a0a0a]  pl-2 pr-2 py-2 lg:py-4 lg:pr-4 flex">
      <div className="w-[92px] overflow-hidden hidden lg:grid">
        <Sidebar/>
      </div>

      <div className="w-full">
        <Homes/>
      </div>
    </div>
  );
}

export default App;
