/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.

// 11.3

*/

function getSum(val1) {
  return function getSum2(val2) {
    console.log(val1+val2);
  }
}

const resultFunc = getSum(5);
resultFunc(15);
