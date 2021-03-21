//Copy By Value
console.log("Example for text datatype: (copy by value)");
var str1 = "Hi";
var str2 = str1;
str1 = "Hello";
console.log(str1, str2);

console.log("Example for number datatype: (copy by value)");
var num1 = 2;
var num2 = num1;
num1 = 5;
console.log(num1, num2);

console.log("Example for boolean datatype: (copy by value)");
var bool1 = true;
var bool2 = bool1;
bool1 = false;
console.log(bool1, bool2);

//Copy By Reference
console.log("Example for array datatype: (copy by reference)");
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr1[0] = 4;
console.log(arr1, arr2);

console.log("Example for object datatype: (copy by reference)");
var obj1 = { name : "Raj", age : 20 };
var obj2 = obj1;
obj1.name = "Kamal";
console.log(obj1, obj2);