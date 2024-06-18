console.log("Hello Coder");

let object = {
    name:"Lakshman",
    age:29,
    qualification:"BSC Degree"
}

function printMsg(){
    console.log("Im Learning MERN full stack")
};
printMsg();

function sum(x,y){
    console.log(x*y);
}
sum(5,6);

let color;
let mode = "black";

if(mode==="white"){
    color = "white";
}else if(mode==="black"){
    color = "black"
}
console.log(color);

let myArray = [1,2,3,4,5,6];
myArray.forEach((el,i)=>{
console.log(`Index of ${i} = ${el}`);
});

let newArray = myArray.map((el)=>{
    return el*el;
})
console.log(newArray);

let addingEl = myArray.splice(0,2,10,20);
console.log(addingEl);
console.log(myArray);
let removingEl = myArray.splice(2,3)
console.log(removingEl);
console.log(myArray);
let addingEl1 = myArray.splice(2,1,30,40,50);
console.log(addingEl1);
console.log(myArray);

let firstArray = [100,200,300,400];
for(let each of firstArray){
    console.log(each);
};

let secondArray = "Jai Sree Ram"
for(let each of secondArray){
    console.log(each);
}

function multilplication(a,b){
    s = a*b
    return s;
}
let result = multilplication(5,6);
console.log(result);

const squareOfBoth = (a,b)=>{
    console.log(a*a);
    console.log(b*b);
}
squareOfBoth(11,12);


