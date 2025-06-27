let a=3;
let b=4;
console.log("addition");
let c= a+b;
console.log(c);
console.log("subtraction");
let d= a-b;
console.log(d);
console.log("multiplication");
let e= a*b;
console.log(e);
console.log("division");
let f= a/b;
console.log(f);
console.log("exponent");
let g= a**b;
console.log(g);


let x=7;
x +=5;
x -=3;
x *=2;
x /=4;
x %=3;
console.log("assignment operators:");
console.log(" next assignment operators:",x);
console.log("\n");

let a=3;
let b=4;
let isequal=(a==b);
let isstrictequal=(a===b);
let c=(a!=b);
let d=(a<b);
let e=(a>b);
let f=(a<=b);
let g=(a>=b);
console.log("comparsion operators");
console.log(isequal);
console.log(isstrictequal);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);


let and=(a>0 && b>0);
let or=(a>0 || b<0);
let not=!(a<b);
console.log("Logical opertors:");
console.log(and);
console.log(or);
console.log(not);


let band=a&b;
let bor=a|b;
let bxor=a^b;
let bnot=~a;
let left=a<<1;
let right=a>>1;
console.log("Bitwise operators:");
console.log(band);
console.log(bor);
console.log(bxor);
console.log(bnot);
console.log(left);
console.log(right);


let age=18;
let eligibility = (age >=18) ? "eligibility to vote" : "not eligible to vote";
console.log("ternary operator");
console.log(eligibility);



let a=7;
let variabletype = typeof a;
console.log("typeof operator");
console.log(variabletype);