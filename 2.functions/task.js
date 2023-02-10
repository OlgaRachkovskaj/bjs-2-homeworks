function getArrayParams(...arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if(arr[i] < min)
        min = arr[i]; 
      if(arr[i] > max)
        max = arr[i];
        sum += arr[i];
    }
    avg = +(sum / arr.length).toFixed(2) 

  return { min: min, max: max, avg: avg };
}
// ############# Задание 2 #################

//вычисляем сумму элементов массмва arr[]

function summElementsWorker(...arr) {
  let sum = 0;
  for (j = 0; j < arr.length; j += 1) {
    sum = sum + arr[j];
  }

  return sum;
}
//вычисления разницы максимального и минимального элементов

function differenceMaxMinWorker(...arr) { 
  let maximum = arr[0];
  let minimum = arr[0];


  if (arr.length === 0) return 0;

  for (let i = 0 ; i < arr.length; i++) {
    if (maximum < arr[i]) {
      maximum = arr[i];
    } 
    if (minimum > arr[i]) {
      minimum = arr[i];
    }
  }
  let result =  (maximum - minimum); 
  return result;
}

// вычисления разницы сумм чётных и нечётных элементов

function differenceEvenOddWorker(...arr) {
let sumEvenElement = arr[0];
let sumOddElement = arr[0];

if (arr.length === 0) return 0;
   
  for (let i = 0; i < arr.length; i++) {  
        if(arr[i] % 2 == 0 ){
        sumEvenElement += arr[i];
        } else {
        sumOddElement += arr[i];
     }
   }
   let result = ( sumEvenElement - sumOddElement ); 
   return result;
}  
//вычислять среднее значение чётных элементов.

function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0;     
  ountEvenElement = 0;

if (arr.length === 0) return 0;

   for (let i = 0; i < arr.length; i++) {  
        if(arr[i] % 2 == 0 ){
        sumEvenElement += arr[i];
        ountEvenElement++;  
        } 
   }
   let result = sumEvenElement / ountEvenElement;
   return result;
}

// ############# Задание 3 #################

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;  //максимальный результат

  for (let i = 0; i < arrOfArr.length; i++) {   //цикл для перебора всех элементов массива
    const max = func(...arrOfArr[i]);     //Результат функции сохраните в отдельную константу
    if (max > maxWorkerResult) {  //полученное значение больше переменной
      maxWorkerResult = max;
    }
  }

  return maxWorkerResult;
}
