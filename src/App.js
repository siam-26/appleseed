import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Homes from "./pages/home/Homes";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="App bg-[#0a0a0a]  pl-2 lg:pl-[6px] pr-2 py-2 lg:py-4 lg:pr-4 flex flex-col lg:flex-row">
      <Sidebar expanded={expanded} setExpanded={setExpanded}/>

      <Homes expanded={expanded}/>
    </div>
  );
}

export default App;
