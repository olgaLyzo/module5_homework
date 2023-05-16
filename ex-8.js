//Задачи с модуля 5.3


//#8 Map
	const map=new Map([[5,"olga"],[4,"sergey"],[9,"vasya"],[6,"petia"]]);
	
	let mapKeys = [];
	for(let age of map.keys()){
		mapKeys.push(age);
	}
	console.log(mapKeys);

	map.forEach((value,key,map)=>{
		console.log(`Ключ — ${key}, значение-${value}`);})


