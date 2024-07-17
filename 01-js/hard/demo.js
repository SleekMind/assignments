let exp = '10 + 2 * (6 - (4 + 1) / 2) + 7 abd';
let newexp = [];
let char = "";

// Ensure the expression ends with a space to handle the last segment
exp += ' ';

for (let i = 0; i < exp.length; i++) {
    if ("(+-*/)".includes(exp[i])) {
        newexp.push(exp[i]);
        char = "";
    }

    if (char.length > 0 && exp[i] == ' ') {
        if ((parseFloat(char))) {
            newexp.push(parseFloat(char));
            char = "";
        }
    }
    if ("1234567809.".includes(exp[i])) {
        char += exp[i];
    } else char = "";
}
console.log(newexp);

for (let i = 0; i < newexp.length; i++) {
    if (!('+-/*()'.includes(newexp[i]))) {
        if (isNaN(newexp[i])) {
            throw new Error('INvalid Input ');
        }
    }
}