function displayTime24hr() {
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-GB', { hour12: false });
        process.stdout.write(`\r${time}`);
    }, 1000);
}

function displayTime12hr() {
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { hour12: true });
        process.stdout.write(`\r${time}`);
    }, 1000);
}

// Uncomment one of the following lines to test the corresponding format
// displayTime24hr();
displayTime12hr();


function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function displayTime24hr() {
    setInterval(() => {
        const now = new Date();
        const time = formatTime(now);
        process.stdout.write(`\r${time}`);
    }, 1000);
}

function formatTime12hr(date) {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hour to 12-hour format
    return `${hours}:${minutes}:${seconds} ${period}`;
}

function displayTime12hr() {
    setInterval(() => {
        const now = new Date();
        const time = formatTime12hr(now);
        process.stdout.write(`\r${time}`);
    }, 1000);
}

// Uncomment one of the following lines to test the corresponding format
// displayTime24hr();
// displayTime12hr();
