//Jäätumine

/*let temp = prompt("Mis on õhutemperatuur?");

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
console.log(typeof(treeninguTyyp));

let maxPulssN = 206 - vanus * 0.88;

let maxPulssM = 220 - vanus;
//console.log(maxPulssM);

let tt1Min = 0.5 * maxPulssN;
//console.log(tt1Min);

if ((sugu === "n" || sugu === "N") && treeninguTyyp === "1") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssN * 0.5) + " kuni " + Math.round(maxPulssN * 0.7) + " lööki minutis.");
}
if ((sugu === "n" || sugu === "N") && treeninguTyyp === "2") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssN * 0.7) + " kuni " + Math.round(maxPulssN * 0.8) + " lööki minutis.");
}
if ((sugu === "n" || sugu === "N") && treeninguTyyp === "3") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssN * 0.8) + " kuni " + Math.round(maxPulssN * 0.87) + " lööki minutis.");
}
if ((sugu === "m" || sugu === "M") && treeninguTyyp === "1") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssM * 0.5) + " kuni " + Math.round(maxPulssM * 0.7) + " lööki minutis.");
}
if ((sugu === "m" || sugu === "M") && treeninguTyyp === "2") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssM * 0.7) + " kuni " + Math.round(maxPulssM * 0.8) + " lööki minutis.");
}
if ((sugu === "m" || sugu === "M") && treeninguTyyp === "3") {
    console.log("Pulsisagedus peaks olema vahemikus " + Math.round(maxPulssM * 0.8) + " kuni " + Math.round(maxPulssM * 0.87) + " lööki minutis.");
} else {
    console.log("Andmed valesti sisestatud");
}


//istekoht
let valik = prompt("Kas valite koha ise (ise) või loosiga (loos)?");

if (valik === "ise") {
    let koht = prompt("Kas soovite istuda akna all (aken) või vahekäigu (muu) pool?");
    if (koht === "aken") {
        console.log("Valisid ise. Sinu koht on akna all.");
    } else {
        console.log("Valisid ise. Sinu koht on vahekäigu pool.")
    }
}
else {
    let loositudKoht = Math.floor(Math.random() * 3) + 1;
    if (loositudKoht === 1) {
        console.log("Sinu koht loositi. Sinu koht on akna all.");
    } else {
        console.log("Sinu koht loositi. Sinu koht on vahekäigu pool.");
    }
}

//Spämm

let suurus = prompt("Sisesta kirja suurus (MB):");
let teema = prompt("Sisesta kirja teema:");
let fail = prompt("Kas kirjaga on kaasas fail (jah, ei)?");


/*if (teema === "") {
    console.log("See on spämm");
} else {
    if (teema !=="" && fail)
}
if (suurus > 1 && '(fail === "jah") {*/


let suurus = prompt("Sisesta kirja suurus (MB):");
let teema = prompt("Sisesta kirja teema:");
let fail = prompt("Kas kirjaga on kaasas fail (jah, ei)?");

if (teema !== "") { //peakiri olemas
    if (suurus > 1) {
        if (fail === "jah") {
            console.log("See on spämm!") //kiri koos failiga üle 1mb
        } else {
            console.log("See ei ole spämm.") //kiri koos failiga vähem kui 1mb
        }

    } else {
        console.log("See ei ole spämm"); //kiri väiksem kui 1mb
    }
} else { //pealkirja pole - igal juhul spämm
        console.log("See on spämm!")
    }






