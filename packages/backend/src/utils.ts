const path = require('path');
const fs = require('fs');

export const removeDir = function (dirPath: string, removeSelf?: boolean) {
  if (removeSelf === undefined || false) removeSelf = true;
  try {
    var files = fs.readdirSync(dirPath);
  } catch (e) {
    return;
  }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = path.join(dirPath, files[i]);
      if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);
      else removeDir(filePath, undefined);
    }
  if (removeSelf) fs.rmdirSync(dirPath);
};
