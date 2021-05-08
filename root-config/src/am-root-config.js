import { registerApplication, start } from "single-spa";

registerApplication({
  name: "ang4",
  app: () => {
    return System.import('//localhost:4202/inline.bundle.js')
        .then(() => System.import('//localhost:4202/polyfills.bundle.js')
            .then(() => System.import('//localhost:4202/styles.bundle.js')
                .then(() => System.import('//localhost:4202/vendor.bundle.js')
                    .then(() => SystemJS.import('//localhost:4202/main.bundle.js')))));
  },
  activeWhen: ["/"],
  customProps:  { domElement: document.getElementById('angular-app') }
});

start({
  urlRerouteOnly: true,
});
