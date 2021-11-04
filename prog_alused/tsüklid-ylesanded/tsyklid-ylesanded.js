//äratus

let mituKorda = prompt("Mitu korda äratada?");

for (i = 1; i <= mituKorda; i++) {
    console.log(i + ". Tõuse ja sära!!!");
}

//Jänesevanemate mure
let mituRingi = prompt("Jänku, mitu ringi jooksid?");
let porgandid = 0;

let ring = 1;
while (ring <= mituRingi) {
    if (ring % 2 == 0) {
        porgandid = porgandid + ring;
    }
    ring++;
}
console.log("Porgandite koguarv on " + porgandid);

//täringud
let taringud = prompt("Sisesta täringute arv: ");

console.log("Mängus on vaja " + taringud + " taringut.")

for (let lugeja = 1; lugeja <= taringud; lugeja++) { //tsükkel jookseb vastavalt täringu arvule
    console.log("Viske tulemus on: " + (Math.floor(Math.random() * 6) + 1)); //1-6
}

//õunad



//täringumäng
let taringud = prompt("Sisesta täringute arv: ");

console.log("Mängus on vaja " + taringud + " taringut.")

for (let lugeja = 1; lugeja <= taringud; lugeja++) { //tsükkel jookseb vastavalt täringu arvule
    console.log("Viske tulemus on: " + (Math.floor(Math.random() * 6) + 1)); //1-6
}




