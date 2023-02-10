"use strict"
function solveEquation(a, b, c){
  let arr = [];
  let describe = b**2-4*a*c;
    if (describe < 0){
      return arr};
    if (describe === 0){
      arr.push(-b/(2*a))
      return arr};
    if (describe > 0){
      arr.push(((-b + Math.sqrt(describe))/(2*a)))
      arr.push(((-b - Math.sqrt(describe))/(2*a)))
      return arr};
  return arr;
};
// ЗАДАЧА 2 
function calculateTotalMortgage(percent, contribution, amount ,countMonths){
   let totalAmount; // общая сумма // округление до 2х
    if(isNaN(percent)){
    return false;
    };
    if(isNaN(contribution)){
    return false;
    };
    if(isNaN(amount)){
    return false;
    };
    if(isNaN(countMonths)){
    return false;
    };

   let S = amount - contribution; // сумма кредита - первоначальный взнос
   let P = 1/12/100*percent; 
   let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
   totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
   return totalAmount; 
}