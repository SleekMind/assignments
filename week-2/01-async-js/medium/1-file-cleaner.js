const fs = require("fs");


fs.readFile("1-file-cleaner.md", "utf-8", (err, data) => {
    data = data.replace(/\s+/g, ' ');
    fs.writeFile("1-file-cleaner.md", data, (err, data) => {
        
    });
})