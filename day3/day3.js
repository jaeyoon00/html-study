// (list, arr), object
// int [] arr = new int[123];
// List<Integer> list = new ArrayList<>();
const list = [];
// arr[0] = 1;
// list.add(1);
for (let index = 1; index <= 50; index++){
    const num = 
    (index + "").includes("3") ||
    (index + "").includes("6") ||
    (index + "").includes("9") 
    ? "짝" 
    : index;
    // const num = index % 3 === 0 ? "짝" : index;
    // if(index%3 ==0) list.push("짝");
    // else list.push(index);
    list.push(num);
}
console.log(list);
// console.log(list.length);
