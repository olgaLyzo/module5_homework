//Задачи с модуля 5.3



//#7 Проверка на четность/нечетность
let arr=[1,2,6,0,null];
let evenNums=[];
let oddNums=[];
let zero=[];
for(let i=0; i<arr.length-1; i++){
	if(typeof arr[i]==="number"){
		if((arr[i]%2)===0){
	    evenNums.push(arr[i]);
      if(arr[i]===0){
    	zero.push(arr[i]);
    	}
		}
  	else{
  		oddNums.push(arr[i]);
  	}
  }
}
console.log(evenNums, evenNums.length, oddNums, oddNums.length, zero, zero.length);

