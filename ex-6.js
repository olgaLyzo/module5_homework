//Задачи с модуля 5.3



//#6 Проверка на одинаковые элементы
let allNumIsNotEqual=true;
const arr = [1,2,3,4,4];
for (i = 0; i < arr.length-1; i++){ 
  for (j = i + 1; j < arr.length; j++){
  console.log(arr[i], arr[j]);
    if(arr[i]==arr[j]){
     allNumIsNotEqual=false;
     console.log("some elements are equal")
    }
  }
}


let allNumIsEqual=true;
for(let i=1; i<arr.length-1; i++){
	console.log(arr[0],arr[i]);
	if(arr[0]!==arr[i]){
  allNumIsEqual=false;
  console.log("all elements are't equal");
  break;
  }
}

