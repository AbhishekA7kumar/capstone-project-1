// // import { greet,pi } from "./greet.js";

// // import { salary  } from "./salary.js";

// // let name='avijit mondol'
// // let basics=4500;
// // let nod=25;






// // console.log("the value of pi is  hahhhhahhaaaaa:", pi);

// // greet(name)



// // salary(basics,nod)


// // let reg=/cat/i
// // let reg2=new RegExp('cat');

// // let str="i have a pet cat namned  cat"//  Cat ans is false  java script is case sensitive 


// // let out=reg.test(str)

// // console.log(out) //true ya false

// // how to write present or not
// ///*  [a],[ab],[abc],[a-zA-Z]
// // [0],[01],[0-9]


// //QUANTIFIERS

// /*[a]?-
// ? (0 or1) 
// +(1 or more][a]+
//     *(0 or more][a]*

//         {3}  [a]{3} //  is matlb 3a`s are present :  
//        [a]{3,6}  // 3,4,5 are present 


//        // FOR PHONE NUMBER 
//        [6789][0-9]{9}

//        ans is number started from ten digit number start from 6 or7or 8or 9
//        [/+][9][1][6789][0-9]{9}
       
//      ans is                 +91675655456



//   ###########################   [/+][9][1][6789][\d]{9}

//      ans is +917852564789
//      last 9 digit should be an must be an number 




//      ########################[/+][9][1][6789][\D]{9}

//      ANS           +918AAAAAAAAA
// last 9 digit anything excpt number

// ###############optional   

// (\+91)?[6789][\D]{9}

// ans is +919469654
// 9aaaaaaaaaa                     ###### line 68 &69 aqre correct



// #######
// Rg             

// [a-zA-Z0-9_]+[\.][\w]+[\w]{3}



// ###########for email   



// [a-zA-Z0-9_]+[\@][\w]+[\.[\w]{3}
// test case  :   test_email@test.com   
// match found 
// ######### we replace  [a-zA-Z0-9_]  =[\w]



// */



// // function emailisvalid(e){
// //     let reg=/[\w]+[\@][\w]+[\.][\w]{3}/

// //     let out=reg.test(e);

// //     return out;

// // }

// // let email='test@gmail.com'
// // console.log(emailisvalid(email))
// // import { emailisvalid } from "./emailchecker"




// // let email='test@#gmail.com'
// // console.log(emailisvalid(email))

// // // ans is false @#




// //################%#%$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%

// // const regex=/dog/
// // const str='i have a dog';

// // // const match=regex.exec(str)

// // // console.log(match)//true index9

// // const regex=/Dog/
// // const str='i have a dog';

// // const match=regex.exec(str)

// // console.log(match)

// // const regex=/dog/i
// // const str='i have a dog';

// // const match=regex.exec(str)

// // console.log(match)//  in this cse not case sensitive 








// //################%#%$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%

// // const regex=/dog/
// //  const str='i have a dog';

// // const matches=str.match(str)

// // console.log(matches)// uper wala niche wala ka same worjk


// // const regex=/dog/gi    //global convert all dog into cat  i d into D
// // const str='i have a dog  dog Dog'
// // const newstr=str.replace(regex,'cat')

// // console.log(newstr)

// // const regex=/dog/
// // const str='i have a      dog'

// // const index=str.search(regex)

// // console.log(index)


// // const regex=/\s+/;
// // const str=' i have a dog '

// // const words=str.split(regex)
// // console.log(words);

// //%%%%%%%%%%%%%%% regular expression101

// // prop...

// //propane

// // **********************
// //[^abc]  abc ko chgor  ke sab match ho zayenge ;   


// let str='hello'
// let vow='aeiou'

// let s=str.split('')

// for(let i=0;i<s.length;i++){
//     console.log(str[i])
//     if(vow.includes(s[i])){
//         s[i]=s[i].toUpperCase();

//     }
// }

// console.log(s.join(''));


let sum=0;

for(let i=0;i<=4;i++){
    sum+=i;

}

console.log(sum);



