const fs = require("fs");

fs.readFile("2-counter.md", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Data:");
    console.log(data.toString());  // Ensure the data is converted to string
});

console.log("Control reaches here: 1");

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}

console.log("Control is here now: 2");
