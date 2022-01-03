//=================================================================14/11/2021
// console.log("hello from the js file");
//------------------------------------
//=======================var and let================================
// console.log(a);
// var a=10;
// //let b;
// let b=20;
// console.log(b);
// {
//     var c =10;
//     console.log(c);
//     let d =20;
//     console.log(d);
// }
// console.log(c);
// console.log(d);


//===================constant=====================================

// const a="10";
// const b;  //error
// a=20;     //error
// console.log(a);
//------------------------------------
// const myArr={
//     name:"Avinash",
//     age:20,
// };
// //myArr=5000
// myArr.name="Lokesh";
// //myArr ={       //error
//  //   name:"Ajay",
// //};
// console.log(myArr);


//======================Strings=================================

// let myString1="abc@xyz.com";
// let myString2 ="Abc@xyz.com";

// console.log(myString1.toUpperCase() === myString2.toUpperCase()); //true

// for(let i =0; i<myString1.length; i++){
//     console.log(myString1[i]);   //shows output in letter by letter in small letters
// }


//wap to find repeated characters from string
//input ="abcdafgdbjcj"
//output = "abcdj"

// let input = "jhfkewhjfohefhwbbehnuvu";
// let output ="";

// for(let i =0 ; i < input.length; i++){
// let count=0; 
// for(let j =0 ; j < input.length; j++){
//     if (input[i] === input[j]){
//         if(j<i){
//             break;
//         }                   
//         count ++;
//     if (count > 1){
//         output = output + input[i];
//         break;
//     }
//     }
// }
// }
// console.log(output );

//======================Array=================================

// let myArr =[1,2,3,4,5,"my string ", ["a","b"]];
// //let myArr =[1,2,3,4,5];
// let myArr1 =[1,2,3,4,5];
// let isSame = true;
// for(let i =0; i < myArr.length; i++)
// {
//     if(myArr[i] !== myArr1[i]){
//         isSame = false;
//         break;  
//     }
// }
// console.log(myArr === myArr1);//false
// console.log(isSame);

//wap reverse input = " India is my Country"
// output = " aidnI si ym yrtnuoC "

// input = "India is my Country";
// output = "";

// function reverseString(value){
//     let returnValue="";
//     for(let i = value.length - 1; i > -1; i--){
//         returnValue = returnValue + value[i];
//     }
//     return  returnValue;
// }
// let wordString ="";
// for(let i = 0; i < input.length ; i++ ){
//     if (input[i] === " " ){
//         output = output + reverseString(wordString) + " ";
//         console.log(wordString);
//         wordString ="";
//         continue;
//     }
//     else{
//         wordString = wordString + input[i];
//         if(i + 1 === input.length){
//             output = output + reverseString(wordString);
//             console.log(wordString);
//             wordString = "";
//         }
        
//     }
//     }
//     console.log(output);



// //using function
// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);


//========================functions=======================  16/11/2021
// //normal functions 
// console.log(addNumbers(10,20));//we will get the result  30
// console.log(addNumbers); // we will get function defination

// function addNumbers(number1, number2 ){
//     return number1 + number2;
// }
  
// //function expressio
// const addNumbers2 = function(number1 , number2){
//       return number1 + number2;
// }
// console.log(addNumbers2(10,20));
// console.log(addNumbers2);


// //Arrow Functions
// const addNumbersArrow = (number1 , number2) =>{
//     return number1 + number2;
// };
// console.log(addNumbersArrow(10,20));  //we will get 30
// console.log(addNumbersArrow);// we willl get function defination

//=============================this===============================
// const myObject ={ //used to point the current object
//     //100
//     name: "Lokesh",
//     getName: function(){
//         return this.name;
//     },
// };
// const myNewObject ={
//     //200
//     name : "xyz",
// };

// //myObject.getName -1000
// //newGetName - 2000
// const newGetName = myObject.getName.bind(myNewObject);
// console.log(myObject.getName());//Lokesh
// console.log(newGetName());//xyz

//=====================constructor function==================== 

function Person (name , age ){
    //check if called with new new kw
    if (!new.target){
        return new Person(name, age);
    }
    //this = {}added internally
    this.name =name;
    //this.number;//1234;
    this.age = age;
    //return 1234;//not allowed
    //return [1,2,3,4];//allowed
    //return this;//added internally
}
const personObject = new Person("lokesh",24);
const personObject1 = Person("Lokesh", 24);//same op
console.log(personObject);
console.log(personObject1);

//=================================Destructuring================================
// const myArr = [1, 2, 3, 4];
// // const a = myAr   r[0];
// // const b = myArr[1];
// // const c = myArr[2];
// // const d = myArr[3];
// const [a, c, b, d] = myArr; //sequence is very important
// //const lokesh =[7,10,1998]
// //console.log(lokesh);
// console.log(a, b, c, d );
// const myObject = {
//   name: "Lokesh",
//   age: 24,
//   address: "pune,akurdi 2211",
// };
// // const name = myObject.name;
// // const age = myObject.age;
// const { age, name ,address } = myObject; //sequence is not important
// console.log(name , age ,address ); 

//======================spread operator ====================================17/11/2021
// const myArr = [1,2,3,4,5]; //1000
// const myArrNew =[];//2000//old way 
// //const myArrNew = [...myArr]; //2000
// for(let i =0 ; i <myArr.length; i++){
//   myArrNew.push(myArr[i]);
// }
// console.log(...myArr);//same as writing console.log[1,2,3,4,5];//new way
// console.log(myArr);
// console.log(myArrNew);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);

// const myObject = {
//   name : "Lokesh",
//   age : 24,
// };

// const myNewObject = {...myObject};
// console.log(myObject);
// console.log(myNewObject);
// myObject.name = "Patil"
// console.log(myObject);
// console.log(myNewObject);

//console.log(...myObject);//ssssnot work

//=====================Rest parameter=======================================

// function addNumbers(...args){
//   // const args = [10,20,30,40]; // internally 
//   let result = 0;
//   for (let i = 0; i< args.length ; i++){ 
//     result += args[i];//same as result
//   }
//   return result;
// }
// console.log(addNumbers(10,20,30,40,50)); // we can add multiples numbers
















