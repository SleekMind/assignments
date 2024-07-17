const fs = require("fs");

let s = "Hello My name is vinayak sonar";
fs.writeFile("2-counter.md", s, (err, data) => {

    fs.readFile("2-counter.md", "utf-8", (err, data) => { 
        
        console.log("Files has been updated successfully to ");
             console.log(data);
     })
    })