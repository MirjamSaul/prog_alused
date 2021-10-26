let astmeAlus = prompt("Sisesta astme alus:");
let astendaja = prompt("Sisestage astendaja");
let tulemus = astmeAlus**astendaja;
console.log(tulemus);
alert(tulemus);

//trahv
let nimi = prompt("Palun sisesta oma nimi:");
let lubatudKiirus = prompt("Sisesta lubatud kiirus");
let tegelikKiirus = prompt("Sisesta tegelik kiirus");

let arvutatud = (tegelikKiirus - lubatudKiirus) * 3;
//console.log(arvutatud);

alert(nimi + ", " + "sinu trahv on " + Math.min(190, arvutatud) + " eurot.");
console.log(nimi + ", " + "sinu trahv on " + Math.min(190, arvutatud) + " eurot.");

//Ajakulu
let ainepunktid = prompt("Kirjuta ainepunktide arv:");
let nadalateArv = prompt("Kirjuta nädalate arv;");
let ajakulu = Math.trunc((ainepunktid * 26) / nadalateArv);
console.log("Selle aine ajakulu on " + ajakulu + " nädalat.");
alert("Selle aine ajakulu on " + ajakulu + " nädalat.");




