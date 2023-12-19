const parseCode = (str) => {
  // your code here
	let [firstName,lastName,id]=str.split(/00*/g);
	return {
		firstName:firstName,
		lastName:lastName,
		id:id
	}

/*	let arr=str.split("0");
	let newArr=[];
	for(let eachOne of arr){
		if(eachOne!=""){
			newArr.push(eachOne);
		}
	}
	let obj={
		firstName:newArr[0],
		lastName:newArr[1],
		id:newArr[2]
	}
	
	return obj;
	*/
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
