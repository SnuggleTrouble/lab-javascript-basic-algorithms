// Iteration 1: Names and Input
let hacker1 = "Ronald";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Hermione";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
}

// Iteration 3: Loops
// 3.1:
let cappedName = hacker1.toUpperCase().split("").join(" ");
console.log(cappedName);
// Alternatively
let capitalisedName = "";
for (let i = 0; i < hacker1.length; i++) {
    let upperCaseLetter = hacker1[i].toUpperCase();
    if (i === 0) {
        capitalisedName += upperCaseLetter;
    } else {
        capitalisedName += " " + upperCaseLetter;
    }
}
console.log(capitalisedName);

// 3.2:
let reversedName = hacker2.split("").reverse().join("");
console.log(reversedName);
// Alternatively
function reverseName(name) {
    let nameBackward = "";
    for (let i = name.length - 1; i >= 0; i--) {
        nameBackward += name[i];
    }
    return nameBackward;
}
console.log(reverseName(hacker2));

// 3.3:
let longestName = "";
if (hacker1.length >= hacker2.length) {
    longestName = hacker1;
} else {
    longestName = hacker2;
}
for (let i = 0; i < longestName.length; i++) {
    if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?")
        break;
    } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
        console.log(`The driver ${hacker1} goes first.`);
        break;
    } else if (hacker2[i] < hacker1[i] || hacker2[i] === undefined) {
        console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
        break;
    }
}
// Bonus 1: Lorem ipsum generator


// Bonus 2: Palindrome

