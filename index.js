// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(n1,n2){
    return n1 + n2
} 
// console.log(calculateSum(1,2));


// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(num){
 return num%2===0
}
// console.log(isEven(2));


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(arr){
    let max = arr[0];
    for(let i =0;i<arr.length;i++){      
        if(max<arr[i]){
            max = arr[i]  
        }
    }
    return max
}
// let a =[1,6,42,9,31,2,6]
// console.log(findMax(a));


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(str){
    return str.split('').reverse().join('') 
}
// console.log(reverseString('safi'))


// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(arr){
    let newArr=[]
    arr.filter((i)=>{
        if(i%2!==0){
          newArr.push(i)
        } 
    })
    return newArr
}
// console.log(filterOddNumbers([1,2,3,4,57,54,35,24]));


// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(arr){
    let sum=  arr.reduce((acc,curr)=>{
        return acc+curr
    },0)
    return sum
}
// console.log(sumArray([1,2,3,4,5,6,7]));


// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(arr){
    return arr.sort()
}
// console.log(sortArray([1,4,2,5,3]));


// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str){
 let first=str[0].toUpperCase();
 let rest=str.slice(1);
 return first + rest
}
// console.log(capitalizeFirstLetter('hello'))
