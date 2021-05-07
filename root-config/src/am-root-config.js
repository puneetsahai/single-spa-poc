import { registerApplication, start } from "single-spa";

registerApplication({
  name: "ang4",
  app: () => System.import("//localhost:4202/main.bundle.js"),
  activeWhen: ["/"],
  customProps:  { domElement: document.getElementById('angular-app') }
});

start({
  urlRerouteOnly: true,
});
