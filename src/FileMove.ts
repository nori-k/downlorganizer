import * as fs from "fs";
import * as path from "path";

class FileMove {
  private fn: string = "";
  private getFileName(filepath: string) {
    let fn = path.basename(filepath) + path.extname(filepath);
    return fn;
  }

  private moveFileToTargetDirectory(fn: string) {
    fs.renameSync(oldpath, pathname + fn);
  }
}
export default FileMove;
