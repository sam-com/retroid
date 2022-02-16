import { FsPath } from "../fileSystem/constants";
import { loadRom } from "./loadRom";

declare const FS: any;
declare const window: any;

var startEmulator = async function startEmulator(romPath: string) {
  FS.createPath("/", FsPath.USERDATA, true, true);
  await loadRom(romPath);
  console.log("start emu");

  window["Module"].callMain(window["Module"].arguments);
};
