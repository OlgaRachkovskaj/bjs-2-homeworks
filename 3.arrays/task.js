function compareArrays(arr1, arr2) {
    let result;
 
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
    
}

function getUsersNamesInAgeRange(users, gender){

if (users.length === 0){
    return 0;
} else if (gender === "мужской"){
	const man = users.filter(obj => obj.gender === "мужской")
	let resultM = man.reduce((r,man) => r +  man.age, 0) / man.length;
	return resultM;
} else if(gender === "женский"){
	const women = users.filter(obj => obj.gender === "женский")
	let resultW = women.reduce((r,women) => r +  women.age, 0) / women.length;
	return resultW;
} else if(gender === "инопланетянин"){
	return 0;
}
}