function average(valuesArray) {
    var soma = 0;
    valuesArray.forEach(function(value) {
        soma +=value;
    })
    
    return Math.round(soma / valuesArray.length);
}

console.log(average([90,98,89,100,100,86,94]));
console.log(average([40,65,77,82,80,54,73,63,95,49]));