const topLevelWindow = window.parent || window;

function startEmulator() {
  requestAnimationFrame(() => {
    window.focus();
    window["Module"].callMain(window["Module"].arguments);
  });
}

function pauseEmulator() {
  window["Module"].pauseMainLoop();
}

function resumeEmulator() {
  window["Module"].resumeMainLoop();
}

window.onmessage = (e) => {
  if (e.data == "start") {
    startEmulator();
  } else if (e.data === "pause") {
    pauseEmulator();
  } else if (e.data === "resume") {
    resumeEmulator();
  }
};

function focusOnEmulator() {}

window.addEventListener(
  "blur",
  () => {
    requestAnimationFrame(() => {
      window.focus();
    });
  },
  false
);
