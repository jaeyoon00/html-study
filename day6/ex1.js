// 변수 선언 const let
let txt = "hi";
text = 1;

// function sum(a,b){
//     return a+b;
// }
const sum = (a,b) => {
    return a - b;
};
console.log(sum("hi",2));
const print = (i) => {
    console.log("print");
    return i == 2;
};
if(print(2) && print(3)){}

const ppp = print(1) || 7;
    console.log(ppp);
    const ppp2 = print(2) || 7;
    console.log(ppp2);

const arr = [1, 2, 3, 4, 5];

arr.sort// 정렬
arr.map // 원본을 가공
arr.filter // 걸러낼 때

const obj = {
    name :  "박미람",
    age : 24,
    gender : 2,
    toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};
const g = obj.gender === 1 ? "남" : "여";
console.log(obj.toString());

console.log(obj.address);
console.log(obj.address ? obj.address.city : obj.address);
console.log(obj.address && obj.address.city);
console.log(obj.address?.city);

const arr2 = ["김부자", "김세현", "김재민"];
const [p1,p2,p3] = arr2;
const obj2 = {
    name :  "박미람",
    age : 24,
    gender : 2,
    toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};

const {name, age, gender} = obj2;

const makePerson = (name, age) =>{
    return {name, age};
};
console.log(makePerson("이수진",20));
const isAdult = ({name, age, ...rest}) => {
    return { name : obj.name, age : obj.age, isAdult: age>20, ...rest};
}
const 이수진 = makePerson("이수진",20);
isAdult(이수진.name, 이수진.age);
console.log(isAdult(obj2));

// mongo veu , oracle
// elk next, postgre
