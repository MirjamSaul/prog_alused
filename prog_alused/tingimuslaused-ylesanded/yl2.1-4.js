//Jäätumine

let temp = prompt("Mis on õhutemperatuur?");

if (temp > 4) {
    console.log("Ei ole jäätumise ohtu");
    alert("Ei ole jäätumise ohtu");
}
else {
    console.log("Jäätumise oht!");
    alert("Jäätumise oht!");
}

//Pulss
let vanus = prompt("Sisesta oma vanus:");
let sugu = prompt("Sisesta oma sugu(M, m, N või n):");
let treeninguTyyp = prompt("Sisesta treeningu tüüp((1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening)");

let maxPulssN = 206 - vanus * 0.88;
//console.log(maxPulssN);

let maxPulssM = 220 - vanus;
//console.log(maxPulssM);

let tt1Min = 0.5 * maxPulssN;
//console.log(tt1Min);

if ((sugu === "n" || sugu === "N") && treeninguTyyp == "1") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssN * 0.5) + " kuni " + Math.round(maxPulssN * 0.7) + " lööki minutis.");
}
if ((sugu === "n" || sugu === "N") && treeninguTyyp == "2") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssN * 0.7) + " kuni " + Math.round(maxPulssN * 0.8) + " lööki minutis.");
}
if ((sugu === "n" || sugu === "N") && treeninguTyyp == "3") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssN * 0.8) + " kuni " + Math.round(maxPulssN * 0.87) + " lööki minutis.");
}
if ((sugu === "m" || sugu === "M") && treeninguTyyp == "1") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssM * 0.5) + " kuni " + Math.round(maxPulssM * 0.7) + " lööki minutis.");
}
if ((sugu === "m" || sugu === "M") && treeninguTyyp == "2") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssM * 0.7) + " kuni " + Math.round(maxPulssM * 0.8) + " lööki minutis.");
}
else if ((sugu === "m" || sugu === "M") && treeninguTyyp == "3") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssM * 0.8) + " kuni " + Math.round(maxPulssM * 0.87) + " lööki minutis.");
} else {
    console.log("Andmed valesti sisestatud");
}
