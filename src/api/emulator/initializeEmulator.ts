import { loadCore } from "./loadCore";
import { loadRom } from "./loadRom";

declare const window: any;

const canvas = document.getElementById("canvas");

window["Module"] = {
  canvas: canvas,
  noInitialRun: true,
  arguments: ["/rom.bin", "--verbose"],
};

window["Module"].onRuntimeInitialized = async () => {
  console.log("wasm ready");
  await loadRom("zelda.sfc");
  window.top.postMessage("ready", "*");
};

await loadCore("snes9x");
