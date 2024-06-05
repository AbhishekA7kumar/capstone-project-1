// // // console.log("babbar")

// // // // lexical scope  closure property
// // // function counter(){
// // //     let count=0;
// // //     return function(){
// // //         count++;
// // //         return count;
// // //     }
// // // }

// // // let x=counter();
// // // console.log(x())
// // // console.log(x())
// // // console.log(x())


// // // if(x){
// // //     if(y){
// // //         if(z){
// // //             console.log('i will run')// x and y both should be vtrue
// // //         }else{
// // //             console.log("this will run ")
// // //         }
// // //     }
// // // }

// // // let obj={
// // //     name: 'first',
// // //     lname:'khan',
// // //     profession:'actor',
// // //     age:'75'
// // // }

// // // for(let key in obj){
// // // console.log(obj[key])


// // // }


// // // let arr=[[7,8,9],
// // //         [6,5,4],
// // //         [3,2,1]]

// // //         //print aray in reverse order 
// // //         for(let i=0;i<arr.length;i++){
// // //             for(let j=arr[i].length-1;j>=0;j--){
// // //                 console.log(arr[i][j])

// // //             }
// // // //             console.log('\n');

// // // //         }


// // // let sent='rohan is a complan boy and priyansi is a bornvita girl '

// // // let out=sent.split('and');

// // // // console.log(out)

// // // // immutable propety bech me change nhi kar skate

// // // let n='avijit'
// // // n[3]='p'

// // // console.log(n);



// //   const person = {
// //     name: 'Lydia'
// //   };
  
// //   function sayHi(age) {
// //     return `${this.name} is ${age}`;
// //   }
// //   console.log(sayHi.call(person, 21));
// //   console.log(sayHi.bind(person, 21));

// // const add = x => y => x + y;
// // const addFive = add(5);
// // console.log(addFive(2));


// // function sayHello() {
// //     return () => {
// //       console.log("Hello!");
// //     };
// //   }
// // //   console.log(sayHello());


// // const regex = /[amn]?/;
// // const string = "a";
// // console.log(regex.test(string));

// let person = {
//     name: "John",
//     age: 30
//     };
//     let clone = Object.assign({}, person);
//     clone.age = 25;
//     console.log(person.age);

let person = {name: "John", age: 30};
Object.defineProperty(person, "salary", {value: 5000, writable: false});
person.salary = 6000;
console.log(person.salary);
