// Inversion d'une chaine de caractère
function stringIversion(originalString) {
    let inversreversedString = originalString.split('').reverse().join('');
    return inversreversedString;
}
//décompte du nombre de caractère
function characterCounter(originalString) {
    return originalString.length;
}
//Mise en majuscule
function capitalizeCharacters(originalString) {
    return originalString.toUpperCase();
}
// maximum et minimum d'un tableau
function findMaxMin(array) {
    let maxi = Math.max(...array);
    let mini = Math.min(...array);
    return {
        maximum: maxi,
        minimum: mini
    };
}
// somme des nombre d'un meme tableau
function matrixElementSum(array) {
    let som = 0;
    for (let i = 0; i < array.length; i++) {
        som += parseInt(array[i]);
    }
    return som;
}

function fevenNumberFilter(array) {
    return array.filter(function (element) {
        return element % 2 === 0; // Retourne true si l'élément est pair
    });
}

function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        let resultat = 1;
        for (let i = 2; i <= nombre; i++) {
            resultat *= i;
        }
        return resultat;
    }
}

function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    } else if (nombre <= 3) {
        return true;
    } else if (nombre % 2 === 0 || nombre % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}