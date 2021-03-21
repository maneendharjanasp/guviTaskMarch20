//Copy By value for Composite Data Types

/** For Array DataType */
console.log("Copy by value for Array DataType:");
var arr1 = [1,2,3];
var arr2 = [];
for(var num in arr1){
    arr2[num] = arr1[num];
}
arr2[0] = 4;
console.log("arr1 : "+ arr1);
console.log("arr2 : "+ arr2);


/** For Object DataType */
console.log("Copy by value for Object DataType:");
var obj1 = {
    name : "Ragu",
    age : 23,
    sex : "male"
};
var obj2 = {};
for(var key in obj1){
    obj2[key] = obj1[key];
}
obj2.name = "Seetha";
obj2.sex = "female";
console.log("obj1 : ");
console.log(obj1);
console.log("obj2 : ");
console.log(obj2);