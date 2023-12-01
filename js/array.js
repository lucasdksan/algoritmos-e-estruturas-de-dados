/* 2. Introdução ao Array */

var avgTem = [];

avgTem[0] = 45;
avgTem[1] = 15.3;
avgTem[2] = 35;
avgTem[3] = 33;
avgTem[4] = 40.9;

console.log(avgTem)

/* 3. Criando e inicializando arrays */

var daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

console.log(daysOfWeek);

/* 4. Acessando elementos através da iteração */

for (var i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

/* 5. Inserindo elementos */

var arr_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr_numbers[arr_numbers.length] = 10;
arr_numbers.push(11);
arr_numbers.push(12);
arr_numbers.push(13);
arr_numbers.push(14);
arr_numbers.push(15);

arr_numbers.unshift(0);

console.log(arr_numbers)

/* 6. Removendo elementos */

arr_numbers.pop();
arr_numbers.pop();
arr_numbers.pop();
arr_numbers.pop();
arr_numbers.pop();

console.log(arr_numbers)

arr_numbers.shift();
arr_numbers.shift();
arr_numbers.shift();
arr_numbers.shift();

console.log(arr_numbers)

/* 7. Inserindo elementos em uma posição específica */

var arr_numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

arr_numbers_2.splice(4, 2);

console.log(arr_numbers_2);

/* 8. Arrays bidimensionais */

var avgTempWeek = [];
var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29, 33, 21.8, 19.5, 17, 33.8];
var avgTempWeek3 = [30, 20.2, 10.9, 20.7, 20.4, 40.6, 20.5];
var avgTempWeek4 = [40.1, 20.9, 33.5, 20.8, 10.5, 17.5, 33];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek)

/* 9. Arrays bidimensionais pt2 */

/* 10. Arrays tridimensionais */

var firstWeeks = [ avgTempWeek1, avgTempWeek2 ];
var lastWeeks = [ avgTempWeek3, avgTempWeek4 ];

var month = [firstWeeks, lastWeeks];

console.log(month[0][1][4]);