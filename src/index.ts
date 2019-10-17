import * as chokidar from "chokidar";
/**
 **   function createWatcher(
 **    paths: string | string[],
 **    options: chokidar.WatchOptions = {}
 **  ): Promise<chokidar.FSWatcher> {
 **    return new Promise((resolve, reject) => {
 **      try {
 **        let watcher = chokidar.watch(paths, options);
 **        watcher.once("ready", () => resolve(watcher));
 **      } catch (err) {
 **        reject(err);
 **      }
 **    });
 **  }
 **
 **  let watcher = await createWatcher("~/Downloads");
 **
 **  chokidar.watch("~/Downloads").on("all", (event, path) => {
 **    console.log(event, path);
 **  });
 */

// todo: chokidarで ~/Downloads の変更を監視
let watcher = chokidar.watch("~/Downloads", {
  ignored: /[\\/\\\\]\./,
  persistent: true
});

// todo: ~/Downloadsに変更があった場合ファイル拡張子に応じてmkdirやmvをして自動でファイル整理をする
watcher.add("./data2/");
watcher.add("./data3/tetete.txt");
watcher.on("ready", () => {
  console.log("ready watching ...]");
  watcher.on("add", path => {
    console.log("added : ${path}");
  });
  watcher.on("change", path => {
    console.log("changed : ${path}");
  });
  watcher.on("unlink", path => {
    console.log("unlink : ${path}");
  });
  watcher.on("addDir", path => {
    console.log("addDir : ${path}");
  });
  watcher.on("unlinkDir", path => {
    console.log("unlinkDir : ${path}");
  });
});
