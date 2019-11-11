import * as os from "os";

let watchdir = os.homedir() + "/Downloads";
export class FileManagementUtil {
  public getPathToTargetDirectory(ext: string): string {
    let todir: string = "";

    if (this.isAudio(ext)) {
      todir = watchdir + "/Media/Audio";
    }
    if (this.isText(ext)) {
      todir = watchdir + "/Text/TextFiles";
    }
    if (this.isVideo(ext)) {
      todir = watchdir + "/Media/Video";
    }
    if (this.isImage(ext)) {
      todir = watchdir + "/Media/Images";
    }
    if (this.isInternet(ext)) {
      todir = watchdir + "/Other/Internet";
    }
    if (this.isCompressed(ext)) {
      todir = watchdir + "/Other/Compressed";
    }
    if (this.isDisc(ext)) {
      todir = watchdir + "/Other/Disc";
    }
    if (this.isData(ext)) {
      todir = watchdir + "/Programming/Database";
    }
    if (this.isExecutable(ext)) {
      todir = watchdir + "/Other/Executables";
    }
    if (this.isFonts(ext)) {
      todir = watchdir + "/Other/Fonts";
    }
    if (this.isPresentations) {
      todir = watchdir + "/Text/Presentations";
    }
    if (this.isSpreadsheet) {
      todir = watchdir + "/Text/Microsoft/Excel";
    }
    if (this.isSystem) {
      todir = watchdir + "/Text/Other/System";
    }

    return todir;
  }

  private isAudio(ext: string): boolean {
    return ext ===
      (".aif" ||
        ".cda" ||
        ".mid" ||
        ".midi" ||
        ".mp3" ||
        ".mpa" ||
        ".ogg" ||
        ".wav" ||
        ".wma" ||
        ".wpl" ||
        ".m3u" ||
        ".aac")
      ? true
      : false;
  }

  private isText(ext: string): boolean {
    return ext ===
      (".txt" ||
        ".doc" ||
        ".docx" ||
        ".odt" ||
        ".pdf" ||
        ".rtf" ||
        ".tex" ||
        ".wks" ||
        ".wps" ||
        ".wpd")
      ? true
      : false;
  }

  private isVideo(ext: string): boolean {
    return ext ===
      (".3g2" ||
        ".3gp" ||
        ".avi" ||
        ".flv" ||
        ".h.264" ||
        ".m4v" ||
        ".mkv" ||
        ".mov" ||
        ".mp4" ||
        ".mgp" ||
        ".mpeg" ||
        ".rm" ||
        ".swf")
      ? true
      : false;
  }

  private isImage(ext: string): boolean {
    return ext ===
      (".ai" ||
        ".bmp" ||
        ".gif" ||
        ".ico" ||
        ".jpg" ||
        ".jpeg" ||
        ".png" ||
        ".ps" ||
        ".psd" ||
        ".svg" ||
        ".tif" ||
        ".tiff" ||
        ".CR2")
      ? true
      : false;
  }

  private isInternet(ext: string): boolean {
    return ext ===
      (".asp" ||
        ".aspx" ||
        ".cer" ||
        ".cfm" ||
        ".cgi" ||
        ".pl" ||
        ".css" ||
        ".html" ||
        ".js" ||
        ".jsp" ||
        ".part" ||
        ".php" ||
        ".rss" ||
        ".xhtml")
      ? true
      : false;
  }

  private isCompressed(ext: string): boolean {
    return ext ===
      (".7z" ||
        ".arj" ||
        ".deb" ||
        ".pkg" ||
        ".rar" ||
        ".rpm" ||
        ".tar.gz" ||
        ".z" ||
        ".zip")
      ? true
      : false;
  }

  private isDisc(ext: string): boolean {
    return ext === (".bin" || ".dmg" || ".iso" || ".toast" || ".vcd")
      ? true
      : false;
  }

  private isData(ext: string): boolean {
    return ext ===
      (".csv" ||
        ".dat" ||
        ".db" ||
        ".dbf" ||
        ".log" ||
        ".mdb" ||
        ".sav" ||
        ".sql" ||
        ".tar" ||
        ".xml" ||
        ".json")
      ? true
      : false;
  }

  private isExecutable(ext: string): boolean {
    return ext ===
      (".apk" || ".bat" || ".com" || ".exe" || ".gadget" || ".jar" || ".wsf")
      ? true
      : false;
  }

  private isFonts(ext: string): boolean {
    return ext === (".fnt" || ".fon" || ".otf" || ".ttf") ? true : false;
  }

  private isPresentations(ext: string): boolean {
    return ext === (".key" || ".odp" || ".pps" || ".ppt" || ".pptx")
      ? true
      : false;
  }

  private isSpreadsheet(ext: string): boolean {
    return ext === (".ods" || ".xlr" || ".xls" || ".xlsx") ? true : false;
  }

  private isSystem(ext: string): boolean {
    return ext ===
      (".bak" ||
        ".cab" ||
        ".cfg" ||
        ".cpl" ||
        ".cur" ||
        ".dll" ||
        "dmp" ||
        ".drv" ||
        ".icns" ||
        ".ico" ||
        ".ini" ||
        ".ink" ||
        ".msi" ||
        ".sys" ||
        ".tmp")
      ? true
      : false;
  }

  private isClang(ext: string) {
    return ext === ".c" ? watchdir + "/Programming/C&C++" : "";
  }

  private isJava(ext: string) {
    return ext === ".class" ? watchdir + "/Programming/Java" : "";
  }

  private isDart(ext: string) {
    return ext === ".dart" ? watchdir + "/Programming/Dart" : "";
  }

  private isPython(ext: string) {
    return ext === ".py" ? watchdir + "/Programming/Python" : "";
  }

  private isShell(ext: string) {
    return ext === ".sh" ? watchdir + "/Programming/Shell" : "";
  }

  private isSwift(ext: string) {
    return ext === ".swift" ? watchdir + "/Programming/Swift" : "";
  }

  private isClib(ext: string) {
    return ext === ".h" ? watchdir + "/Programming/C&C++" : "";
  }

  // is Programming メソッドの実装後に修正して登録する。
  private isNotAnything(ext: string) {
    return ext === "" ? watchdir + "/Other/Uncategorized" : -1;
  }
}

export default FileManagementUtil;
