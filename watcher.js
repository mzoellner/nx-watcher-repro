const { Watcher } = require("@nx/nx-win32-x64-msvc");
let watcher = new Watcher(process.cwd(), [""]);

process.on("SIGTERM", () => {
  watcher.stop();
});

process.on("SIGINT", () => {
  watcher.stop();
});

watcher.watch((err, events) => {
  if (err) {
    console.error(err);
  }

  console.log(events);
});
