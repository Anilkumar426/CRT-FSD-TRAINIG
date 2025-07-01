// console.log("Hello world");
// function sayHello(){
//    console.log("Hello world from Say function"); 
// }
//  sayHello();
//  console.log("this is a simple program in javascript"); 
// console.log("one"); 
// console.log("two"); 
// console.log("three"); 
// setTimeout(()=> {
//     console.log("Hello world "); 
// },3000);
// console.log("Hello world from Say function"); 
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,ds){
//     ds(a,b);
// }
// calculator(3,4,sum);

//  calculator(3,4,(a,b)=>{
//      console.log(a+b); 
//      console.log("Thala for a reason"); 

//   });

// console.log("one"); 
// console.log("two"); 
// console.log("three");  
// const hello=()=> {   
//      console.log("Hello world "); 
//  }
//  setTimeout(hello,3000);
// for(let i=0; i<5; i++)
// {
//     let str="";
//     for(let j=0; j<5; j++)
//     {
//         str +=j;
//     }
//     console.log(i,str);
// }
// function getData(dataid){
// setTimeout(()=> {
//     console.log("Fetch data item:",dataid);  
// },3000);
// }
// getData(1);
// getData(2);
// getData(3);
// function getData(dataid,getnextdata){
// setTimeout(()=> {
//     console.log("Fetch data item:",dataid); 
//     if(getnextdata){
//         getnextdata();
//     }
// },3000);
// }
// getData(1,() =>{
//     console.log("getting data 2..")
//     getData(2,() =>{
//       console.log("getting data 3..")
//       getData(3);
//     });
// });
// const myPromise = new Promise((reslove,reject) =>{
//     setTimeout(()=> {
//         const sucess=true;
//         if(sucess){
//             reslove("data fetched successfully");
//         } else{
//             reject("error fecthing data");
//         }
//     },2000);
// });
// myPromise
// .then((data) => {
//     console.log("promised is resloved:",data);
// })
// .catch((error) =>{
//     console.error("promise rejected with error:",error);
// });
// let Promise = new Promise((reslove,reject) =>{
//      console.log(" iam promise");
//      if(1<0){
//         reslove(123);
//      }
//      reject("some went wrong:");
// }
// );
// function getData(dataid){
//  return new Promise((reslove,reject) =>{
//    setTimeout(()=> {
//     console.log("Fetch data item:",dataid);  
//     reslove("success");
//    },2000);
//  });
// }
// let result=getData(123);
// result;
// getData(101)
//      .then(result => {
//            console.log("first fetch:",result);
//            return getData(102);
//      })   
//      .then(result => {
//            console.log("second fetch:",result);
//            return getData(103);
//      })   
//      .then(result => {
//            console.log("third fetch:",result);
//            return getData(104);
//      });  
    