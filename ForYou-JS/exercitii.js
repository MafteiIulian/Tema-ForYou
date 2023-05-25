// La un hotel pentru animale:

var numberOfDogs = 11;
var numberOfCats = 11;
var numberOfEmployees = 7;

// Implementati urmatoarele functii:

// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare


function maxCaini(dogs){
    if (dogs > 15){
        console.log("EX1. --- Ne pare rau,nu mai avem locuri libere.");
} else {
        console.log("EX1. --- Avem loc liber pentru catetul dvs.")
}
}
var rezultatNou = maxCaini(numberOfDogs);


// b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat

   

function checkHotelRooms(cats, dogs){
    var animals = cats + dogs;
    if (animals > 30) {
        console.log("EX2. --- Ne pare rau, hotelul este supra-aglomerat.");
    } else {
        console.log("EX2. --- Avem locuri libere.")
    }
     
 }
 var freeRooms = checkHotelRooms(numberOfCats, numberOfDogs);


// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.
    
        function toys(cats, dogs){
        var toysCats = cats * 3;
        var toysDogs = dogs * 5;

        var totalToys = toysCats + toysDogs;

        console.log("EX3. --- Trebuie sa cumparam pentru pisici " + toysCats + " de jucarii.");
        console.log("EX3. --- Trebuie sa cumparam pentru catei " + toysDogs + " de jucarii.");
        console.log("EX3. --- Trebuie sa cumparam in total " + totalToys + " de jucarii.")
       
        return toysCats, toysDogs, totalToys;
    }
     var result = toys(numberOfCats, numberOfDogs);
    

// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare

        function checkPersonal(cats, dogs, employees) {
            if(((cats + dogs) < 20) || (employees > 5) ){
                console.log("EX4. --- Animalele sunt bine ingrijite.")
            } else {
                console.log("EX4. --- Animalele nu sunt bine ingrijite.");
            }
}
    var result = checkPersonal(numberOfCats, numberOfDogs, numberOfEmployees);

// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.


        function luckyNumber(cats, dogs, employees){
        var totalFiinte = cats + dogs + employees + 1; // 1 = Patronul
        var costTotal = employees * 100;
        var multiplu = totalFiinte % 7 === 0;
    if(multiplu) {
            console.log ("EX5. --- Fiecare angajat primeste 100 de lei. " + "Costul total este de " + costTotal + " lei.")
    } else {
            console.log("EX5. --- Nimeni nu primeste bonus.");
}
}
        var result = luckyNumber(numberOfCats, numberOfDogs, numberOfEmployees);


// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"
// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"
   
    function parImpar(cats, dogs) {
    var paritateSi = (cats % 2 !== 0) && (dogs % 2 !== 0);
    var paritateSau = (cats % 2 === 0) || (dogs % 2 === 0);

    if(paritateSi){
        console.log("EX6. --- Paritate Si");

    } else if (paritateSau) {
        console.log("EX6. --- Paritate Sau");
    } 
}
    var result = parImpar(numberOfCats, numberOfDogs);