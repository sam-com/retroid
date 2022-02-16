import { useState } from "react";
import { Emulator } from "./components/Emulator/Emulator";

function App() {
  const [key, setKey] = useState(1);
  return (
    <div className="flex w-screen h-screen bg-slate-700 overflow-hidden">
      <div className="flex-grow overflow-auto">
        <Emulator key={key} rom="smw.sfc" core="snes9x" />
      </div>
    </div>
  );
}

export default App;
