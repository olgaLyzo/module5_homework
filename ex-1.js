//Задачи с модуля 5.3

//#1 Проверка типа, четности и NaN
	const r = +prompt();
	if(typeof r !== "number" || isNaN(r)){
		console.log("упс, это не число")
	}else if(r % 2 !== 0){
		console.log("число нечетное")
	}else{console.log("число четное")}


