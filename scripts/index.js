
/**
 * author: Hua
 * 打包时自动复制docs文件夹到dist文件夹
 */

const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');
var sourceDir = path.join(__dirname, '../docs');
var destinationDir = path.join(__dirname, '../dist/docs');

if (!fs.existsSync(destinationDir)){   
  fs.mkdirSync(destinationDir, { recursive: true });
}

fsExtra.copy(sourceDir, destinationDir, function(error) {   
  if (error) throw error;

  fs.readdir(destinationDir, (error, files) => {  
    if (error) throw error;
    
    files.forEach(file => {
      if (path.extname(file) === '.js') {
        const filePath = path.join(destinationDir, file);
        fs.unlink(filePath, error => {
          if (error) throw error;
        });  
      }
    });
  });
});