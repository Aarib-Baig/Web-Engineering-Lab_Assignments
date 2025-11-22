const fs = require('fs');

fs.appendFile('output.txt', '\nAppended content', (err) => {
    if (!err) console.log('Content appended!');
});


fs.rename('oldname.txt', 'newname.txt', (err) => {
    if (!err) console.log('File renamed!');
});


fs.unlink('unwanted.txt', (err) => {
    if (!err) console.log('File deleted!');
});


fs.mkdir('myFolder', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory created.');
    
    fs.readdir('myFolder', (err, files) => {
        console.log('Files in directory:', files);
    });
});