console.log("Task 1");
for (let i = 1; i < 11; i++) {
    console.log(i * i);
}
console.log("Task 2");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("blast off");
console.log("Task 3");
for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}
console.log("Task 4");
let sum = 0;    
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
console.log("Task 5");
let factorial = 1;
for (let i = 1; i <= 10; i = i + 1) {
    factorial *= i;
    console.log(factorial);
}
console.log("Task 6");
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("Task 7");
for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-i - 1));
}
console.log("Task 8");
let arrcube = [];
for (let i = 1; i <= 10; i++) {
    arrcube.push(i * i * i);
}
console.log(arrcube);
console.log("Task 9");
let arrFib = [0,1];
for (let i = 0; i < 10; i++) {
    arrFib.push(arrFib.at(-1)+arrFib.at(-2))
}
console.log(arrFib)
console.log("Task 10");
let arrrev = [];
for (let i = 0; i < arr.length; i++) {
    arrrev.push(arr.at(-i - 1));
}
console.log(arrrev);