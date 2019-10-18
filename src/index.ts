import * as chokidar from "chokidar";
import * as os from "os";
import * as path from "path";
import * as fmutil from "./FileManagementUtil";
// import * as fs from "fs";

let targetdir = os.homedir() + "/Downloads";
let watcher = chokidar.watch(targetdir, {
  ignored: /[\\/\\\\]\./,
  persistent: true
});

// todo: ~/Downloadsに変更があった場合ファイル拡張子に応じてmkdirやmvをして自動でファイル整理をする
let ext;
let todir;
watcher.on("ready", () => {
  console.log("ready watching ...]");
  watcher.on("all", (event, filepath) => {
    ext = path.extname(filepath);
    console.log(`${event} : ${filepath}`);
    console.log("'" + ext + "' is file extention!");
  });
});
