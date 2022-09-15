 
// subtraction
// let num = 56;
// num--
// console.log(num)

// to find cube of a number
// a=9
// result=Math.pow(9,3);
// console.log(result)

// if else statements
// let n = 982;
// if(n/2 ===0)
// console.log("it is a even number")
// else
// console.log("it is a odd number")

// ternary operator
// let m=57;
// x= m%2 === 0?true:false
// console.log(x)

// do while loop
// let p=1;
// do{
//     console.log("santosh",p);
//     p++
// }
// while(p<=10)

// for loop
// for( let n=1;n<=5;n++){
//     console.log("santosh",n)
//     for (let o=3;o<=8;o++)
//     console.log("GM",o)
// }

// complex object
//  let alien=
//  {
//     name:"santosh",
//     age:23,
//     work_exp:"6months",
//     laptop:{
//         brand:"mi",
//         ram:"8gb"
//     }
// }
// console.log(alien.name?.length)
// for in loop
// for(let key in alien.laptop)
// {
//     console.log(key,alien.laptop[key])
// }


// function
// function greet(){
//     console.log("hi,santosh have a great a day")
// }
// greet()


// pass and return a function
// greet(person,day)=>{
//     return`Hello ${person},${day}`
// }
// let person="santosh"
// let day="it is sunday"
// let fun=greet(person,day);
// console.log(fun)

// Function Expression
// let a=function(int1,int2){
//     return int1+int2
// }
// let z=a
// let result=z(8,7)
// console.log(result)

// let add=function(a,b,c){
//     console.log(a,b,c)
//     return a+b+c
// }
// let result=add(2,3,4)
// console.log(result)

// let input1 = Math.abs(5);
// let input2 = Math.abs(-7);
// let sum = (num1,num2) => num1 + num2;
// let result = sum(7,-5);
// console.log(result);

// constructor function & how to set values for an existing object
// class User {
//     constructor(name, email, id, location,) {
//         this.name =name
//         this.email = email
//         this.id = id
//         this.location = location
//         this.work =function(){
//            console.log("React_Developer") 

//         }

//     }
// }
// let user1= new User ('santosh','reddy@gmail.com','021164916','Banglore')
// console.log(user1)
// user1.name="sandeep"
// console.log(user1)
// user1.work()

//  let user=function (firstname,lastname){
//     return firstname+lastname

// }
// person= new user('santosh'+'reddy')
// console.log(person)

// array push method
// let data=[5,8,7]
// data.push(10,12)
// console.log(data)

// pop method in array
// let num=[9,8,7,6]
// num.pop(3)
// console.log(num)

// unshift method in array
// var work=['sleep','excercise']
// work.unshift('eat')
// console.log(work)

// shift method in array
// let x=[7,8,9,0,4,5]
// x.shift(7)
// console.log(x) //7 will be removed becaz we gave shift"0" i.e index number of 7

// splice method in arrays.
// let data=[9,8,7,6,5,4]
// data.splice(2,2) ----->//first"2"is index number of array&2nd "2" is no.of values you want to remove
// console.log(data)
//====================================
//PALINDROME
// var value= [1,2,3,3,2,1];
// var revValue = value.toString().split('').reverse().join('') ;
// console.log(revValue)
// console.log(value)

// var strValue = value.toString();
// if(revValue === value){
//     console.log("it is a palindrome");
// }
// else(console.log("not a palindrome"));
//=========================================

// for of loop in arrays
// let data=[{id:23445}]
// data[1]="name"
// data[2]="email"
// for(keys of  data)
// console.log(data)

// sort method in array
// const people = [
//     { name: "John", age: 21 },
//     { name: "Peter", age: 31 },
//     { name: "Andrew", age: 29 },
//     { name: "Thomas", age: 25 }
//   ];
  
//   let sortByAge = people.sort(function (a1, a2) {
//     return a1.age - a2.age;
//   });
  
//   console.log(sortByAge);

// class car{
//     brand;
//     engine;
//     cost;
//     constructor(brand,engine,cost,origin_country){
//     this.brand=brand;
//     this.engine=engine;
//     this.cost=cost;
//     this.origin_country=origin_country;
//     }
//     speed() {
//         console.log("worlds fastest car")
        
//     }
    
// }
// let car1=new car("Mclaren","V12 engine","65000 Euros",'United Kingdom')
// console.log(car1)
// car1.speed()

// class Account {
//     name
//     min_Bal

// }
// class SA extends Account{
//     name="sandeep"
//     min_Bal=254154
//  }
// class CA extends Account {
//     min_Bal = 5001875
// }
// let c1 = new SA()
// console.log(c1)

// let c2 = new CA()
// console.log(c2.min_Bal)

// Multiply

// let arr = [3, 4, 5, 6];

// for (let j = 0; j < arr.length; j++){
//   arr[j] = arr[j] * 10;
// }

// console.log(arr);

// array destructuring
// let dat=[98,76,54,23]
// console.log(dat)
// let [s,a,,t]=dat
// console.log(s,a,t)

// split method
// let sen="my name is santosh reddy from kurnool".split(' ')
// let [a,b,c,d,,...f]=sen;
// console.log(a,b,c,d,...f)

// array for each method in javascript

// let data=["santosh",{id:"021149616"},98,54,65]

// data.forEach((n,i,data)=>{
//     console.log(n,i,data)
// })
// var colors = ["red", "blue", "green"];
// colors.forEach(function(color) {
//     console.log("this is color "+color);
// });


// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// // Iterate over fruits below

// // Normal way
// fruits.forEach(function(fruit){
//   console.log('I want to eat a ' + fruit)
// });

// filter method
// let num=[46,39,45,24,12,48]
// // console.log(num.filter(n=> n%2===0))
// let result=num.reduce((a,b)=>a+b)    //filter method
// console.log(result)
// let result=num.map(n=>n+2)   //map method used to multiply,divide,add in arrays
// console.log(result)

// set method

// let dat=new Set("warrior");  //"r" is removed when we print bcaz set will not repeat the same values.
// dat.add(97);                  // with key word "add" we can add elements to the set.
// dat.add("player");
// dat.add(54);
// dat.add(963);
// dat.add({name:"santosh"});
// dat.add([1,2,3,4,5,6])
// console.log(dat)
// //has() with has method we find if certain value is present in set or not for example;
//  console.log(dat.has(963))  // the result will be "true"bcaz 54 is present in the set,if not it will be false

// map in javascript
// let info= new Map();
// info.set("santosh","Javascript");
// info.set("sandeep","Apex");
// info.set("navin","Blockchain")
// for([a,b] of info){                            //for of method
//     console.log(a,":",b)
// }

// info.forEach((a,b)=>{                     // forEach Method
//     console.log(b,":",a)
// })

// recursion
// let int=1
// function see(){
//     console.log("hi,santosh")
//     console.log(int++)
//     see()
// }
// see()

// factorial using recursion
// function factorial(n){
//     if(n===0)
//     return 1
//     else
//      return n*factorial(n-1)
//  }
//  let m=6
// console.log(factorial(m))

// BIND METHOD
// const Person={
//     name:"santosh",
//     walk(){
//         console.log(this)
//     }
// }
// Person.walk()

// const x = Person.walk. bind(Person)
// x()

// fat arrorw and filter in a object

// const job=[
//     {id:101,name:"santosh",statusisActive:true,age:18,start:1989,end:2003},
//     {id:102,name:"sandeep",statusisActive:true,age:25,start:1987,end:1990},
//     {id:103,name:"navin",statusisActive:false,age:18,start:1974,end:1985},
//     {id:103,name:"fernando",statusisActive:false,age:35,start:1956,end:1963},
//     {id:103,name:"rebel",statusisActive:true,age:45,start:1977,end:2001},
//     {id:103,name:"trint",statusisActive:false,age:66,start:1990,end:2001},
//     {id:103,name:"brock",statusisActive:true,age:72,start:1998,end:2006},
//     {id:103,name:"shawn",statusisActive:false,age:39,start:2006,end:2013},
// ]
// let ages=[23,28,34,56,98,22,14]
// //sort age in ascending order
// let newAges = ages.sort((y,z)=>z-y);
// console.log(newAges)

// job.forEach( (job)=>{console.log(job)
    
// });

//to get only age under 50 members
// let newages=job.filter(age=>(age.age>=10 && age.age<50))
// console.log(newages)

//to get employee more than 10 years in work

// const yearsWorked=job.filter(years=>(years.end-years.start>=10))
// console.log(yearsWorked)

//MAP METHOD-create new array from current array
//create a new array that contains only name,start and end year

// let newArray=job.map(employee=>`${employee.name}[${employee.start}-${employee.end}]`)
// console.log(newArray)
// const totalYears=job.reduce((total,job)=>total+(job.end-job.start),0)
// console.log(totalYears)

// const first={name:"santosh"}
// const second={location:"canada"}
// const result={...first,...second,profession:"web_developer"}
// console.log(result)

// class
// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     run(){
//         console.log("lets go run")
//     }
// }
// const person=new Person("Sandeep",21)
// console.log(person)
// person.run()

// class es6
// class person{
//     constructor(name){
//         this.name=name;
//     }
//     walk(){
//         console.log("walk")
//     }
// }
// class teacher extends person{
//     constructor(name,degree){
//         super()
//         this.name=name
//         this.degree=degree
//         }
//         teach(){
//             console.log("teaching")
//         }
// }
// let p1=new teacher("santosh","bsc")
// console.log(p1)
// p1.teach()
//------
//hoisting in javascript
// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it
// var hoistedVariable;
//-----
// let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });

// let newarr=modifiedArr.map((num)=>{
//     return num+10;

// })
// console.log(newarr)
//--------
//hoisting
// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it
// var hoistedVariable;
//------
//CONVERT FIRST HALF OF STRING TO UPPERCASE AND SECOND HALF OF THE STRING TO LOWERCASE
// let string = "terminator"

// let length = string.length
// if(length<2){
//     console.log(string)
    
// }

// let isOdd = length % 2 !== 0
// let middle = Math.floor(string.length/2);
// isOdd && (middle=middle+1)

// let firsthalf=string.substring(0,middle)
// let secondhalf=string.substring(middle,length)
// let output=firsthalf.toUpperCase()+secondhalf.toLowerCase()
// console.log(output)

























  








