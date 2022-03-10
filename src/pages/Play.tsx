import { Rom, roms } from "@/components/RomList/roms";
import { useParams } from "react-router-dom";
import { Emulator } from "../components/emulation/Emulator";

export function Play() {
  const params = useParams();

  const byRomId = ({ id }: Rom) => id === params.romId;
  const rom = roms.find(byRomId);

  return (
    <div className="flex m-6 flex-grow">
      {rom && <Emulator rom={rom.path} core="snes9x" />}
    </div>
  );
}
