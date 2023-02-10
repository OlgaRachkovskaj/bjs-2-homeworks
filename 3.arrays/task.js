function compareArrays(arr1, arr2) {
    let result;
 
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
    
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) return 0;

let result = users.filter(users => users.gender === gender).reduce((res, item, index, array) => res + item.age / array.length, 0); 
return result;
}