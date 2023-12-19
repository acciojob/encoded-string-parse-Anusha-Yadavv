const parseCode = (str) => {
  // your code here

	let [firstName,lastName,id]=str.split("000");
	let obj={
		firstName:firstName,
		lastName:lastName,
		id:id
	}
	return obj;
	
	/*let firstName="";
	let lastName="";
	let id;
	let obj={};
	let arr=str.split("0");
	let newArr=[];
	for(let eachOne of arr){
		if(eachOne!=""){
			newArr.push(eachOne);
		}
	}
	let m=newArr.length;
	firstName=newArr[0];
	lastName=newArr[1];
	id=newArr[2];
	
		obj[firstName]=firstName;
		obj[lastName]=lastName;
		obj[id]=id;
	return obj;
	*/
	
	
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
