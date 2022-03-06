const isProduction = process.env.NODE_ENV === "production";

if ("serviceWorker" in navigator && isProduction) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/retroid/sw.js", { scope: "/retroid/" });
  });
}
