// (list, arr), object
// int [] arr = new int[123];
// List<Integer> list = new ArrayList<>();
const list = []; // 100... 1000 ->
const list369 = []; // 369 리스트를 만들자
// arr[0] = 1;
// list.add(1);
for (let index = 0; index < list.length; index++){
    // list.push(index);
    const element = 
    list[index].toString().includes("3") ||
    list[index].toString().includes("6") ||
    list[index].toString().includes("9") 
    ? "짝" 
    : array[index];
    list369.push(element);
}
console.log(list369);
    // const num = index % 3 === 0 ? "짝" : index;
    // if(index%3 ==0) list.push("짝");
    // else list.push(index);
    // list.push(num);
// console.log(list.length);
