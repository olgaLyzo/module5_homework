//Задачи с модуля 5.3


//#3 Реверс строки

	//variant-1
	function reverse(str){
	let werewolf = str.split("").reverse().join("");
	console.log(werewolf);
	}
	reverse("hello");

	//variant-2
	function reverse(str){
		var werewolf = "";
		for(var i=str.length-1; i>=0; i--){
		werewolf += str[i];
		}
		console.log(werewolf);
	}
	reverse("Hello");


