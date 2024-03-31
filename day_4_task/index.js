// array declaration and definition.
let arrStr = ["santhosh","dad","arun","ajay","madam"];
let arr =[1,2,3,4,5,6,6,7,8,9,9]; 
console.log("1. Do the below programs in anonymous function & IIFE ");
console.log("1a) Print odd numbers in an array");

// Printing odd numbers in an array by anonymous function.
 let toFindOddNumbers = function (a) {
   
   let oddNumbers = a.filter((i)=> {
    return i%2==1;
   });
   console.log(`Anonymous Function :\n Odd numbers in an array are : ${oddNumbers}`);
 }
 toFindOddNumbers(arr);

// Printing odd numbers in an array by IIFE function.
 (function (a) {
    let oddNumbers = a.filter((i)=> {
        return i%2==1;
       });
       console.log(`IIFE Function :\n  Odd numbers in an array are : ${oddNumbers}`);
 })(arr);

 

 console.log("\n"+ "1b) Convert all the strings to title caps in a string array "+"\n");

 //  Converting all the strings to title caps in a string array by anonymous function.
 let titleCaps = function(a) {
    let str;
    
    console.log(`Anonymous Function : \n Strings in title caps : `);
    for(let i = 0; i<a.length;i++) {
        str = a[i].charAt(0).toUpperCase()+a[i].slice(1);
       console.log(str);
      }
    
    }
 
  
    titleCaps(arrStr);

//  Converting all the strings to title caps in a string array by IIFE function.
 (function(a) {
    let str;
    
    console.log(`IIFE Function : \n Strings in title caps : `);
    for(let i = 0; i<a.length;i++) {
        str = a[i].charAt(0).toUpperCase()+a[i].slice(1);
       console.log(str);
      }
    
    })(arrStr);
    
    console.log(`\n 1c) Sum of all numbers in an array`);
// adding of all numbers in an array by anonymous function.
    let sum = function (a) {
        let sum = 0 ;
        for (let i =0;i<a.length; i++) {
            sum +=a[i];
        }
    console.log(`Anonymous Function : \n Sum of an array : ${sum}`);
           
    }
sum(arr);

// adding of all numbers in an array by IIFE function.
(function (a) {
    let sum = 0 ;
    for (let i =0;i<a.length; i++) {
        sum +=a[i];
    }
console.log(`IIFE Function : \n Sum of an array : ${sum}`);
       
})(arr);

console.log(`\n1d) Return all the prime numbers in an array`);

// Return all the prime numbers in an array by anonymous function.
console.log(`\nAnonymous Function :\n Prime Number in given array are`)
let primeNumbers =function (a){
    a.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    console.log(number);
});
}
primeNumbers(arr);

// Return all the prime numbers in an array by IIFE function.
console.log(`\nIIFE Function :\n Prime Number in given array are`);
(function (a){
    a.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    console.log(number);
});
})(arr);

console.log(`\n1e) Return all the palindromes in an array`);

// Return all the palindromes in an array by anonymous function.
console.log(`\nAnonymous Function :\n palindromes in given array are`);

let palindromes = function (a) {
    for(let i =0; i<a.length; i++) {
        revStr = a[i].split("").reverse().join("");
        if(a[i]===revStr) {
            console.log(a[i]);
        }
    }
}
palindromes(arrStr);

// Return all the palindromes in an array by IIFE function.
console.log(`\nIIFE Function :\n Palindromes in given array are`);
(function (a) {
    for(let i =0; i<a.length; i++) {
        revStr = a[i].split("").reverse().join("");
        if(a[i]===revStr) {
            console.log(a[i]);
        }
    }
})(arrStr);

console.log(`\n1f) Return median of two sorted arrays of the same size.`);

// Returning median of two sorted arrays of the same size by anonymous function.
console.log(`\nAnonymous Function :\n median of two sorted arrays of the same size is :`);

//declaration and definition of two array.
let arr1 =[5,4,3,2];
let arr2 =[9,8,7,6];
let medianValue = function (a,b) {
    a=a.sort();
    b=b.sort();
    let mergedArray =a.concat(b);
    if(a.length === b.length)
    {
      let median = (mergedArray[Math.floor(mergedArray.length/2)]+mergedArray[(Math.ceil(mergedArray.length/2))+1])/2;
      console.log(median);
    } else {
        console.log("length of two are unequal");
    }
}
medianValue(arr1,arr2);

// Returning median of two sorted arrays of the same size by IIFE function.
console.log(`\nIIFE Function :\n median of two sorted arrays of the same size is :`);
(function (a,b) {
    a=a.sort();
    b=b.sort();
    let mergedArray =a.concat(b);
    if(a.length === b.length)
    {
      let median = (mergedArray[Math.floor(mergedArray.length/2)]+mergedArray[(Math.ceil(mergedArray.length/2))+1])/2;
      console.log(median);
    } else {
        console.log("length of two are unequal");
    }
})(arr1,arr2);


console.log(`\n1g) Remove duplicates from an array`);

//Removing duplicates from an array by Anonymous Function.
console.log(`\nAnonymous Function : \n After removal of duplicate elements from an array :`);

let removeDuplicates = function(a) {
    let afterRemove = a.filter((e,i)=> {
        return a.indexOf(e)===i;
    });
    console.log(afterRemove);
}
removeDuplicates(arr);

//Removing duplicates from an array by IIFE Function.
console.log(`\nIIFE Function :\n After removal of duplicate elements from an array :`);

(function(a) {
    let afterRemove = a.filter((e,i)=> {
        return a.indexOf(e)===i;
    });
    console.log(afterRemove);
})(arr);

console.log(`\n1g) Rotate an array by k times\n`);
// Rotating an array by k times by anonymous function.
console.log(` Anonymous Function : Displaying an array which rotated for 2 times : `);
let rotateArray = function (a,k) {
    let temp=[];
    let n = a.length;
    k=k%a.length;
    for(let i = 0;i<n;i++){
      if(i<k){
        temp.push(a[i+n-k]);
        } else {
          temp.push(a[i-k]);
          }
    }  
    console.log(temp);
  }  
  rotateArray(arr,2);

  // Rotating an array by k times by IIFE function.
  console.log(`\n IIFE Function : Displaying an array which rotated for 3 times : `);
  (function (a,k) {
    let temp=[];
    let n = a.length;
    k=k%a.length;
    for(let i = 0;i<n;i++){
      if(i<k){
        temp.push(a[i+n-k]);
        } else {
          temp.push(a[i-k]);
          }
    }  
    console.log(temp);
  }  )(arr,3);


  console.log(`\n2. Do the below programs in arrow functions.`);

//Printing odd numbers in an array by arrow function.
  console.log(`\n2a) Print odd numbers in an array`);
  let findOddNumbers =  (a) => {
   
    let oddNumbers = a.filter((i)=> {
     return i%2==1;
    });
    console.log(`Arrow Function :\n Odd numbers in an array are : ${oddNumbers}`);
  }
 
  findOddNumbers(arr);

//Converting all the strings to title caps in a string array by arrow function.
  console.log(`\n2b) Convert all the strings to title caps in a string array : `);
  let titleCapital = (a) => {
    let str;
    
    console.log(`Arrow Function : \n Strings in title caps : `);
    for(let i = 0; i<a.length;i++) {
        str = a[i].charAt(0).toUpperCase()+a[i].slice(1);
       console.log(str);
      }
    
    }
 
  
    titleCapital(arrStr);

// adding of all numbers in an array by arrow function.
 console.log(`\n2c) Sum of all numbers in an array `);
  let sumOfArray = function (a) {
    let sum = 0 ;
    for (let i =0;i<a.length; i++) {
        sum +=a[i];
    }
console.log(`Arrow Function : \n Sum of an array : ${sum}`);
       
}
sumOfArray(arr);


// Returning all the prime numbers in an array by arrow function.
console.log(`\n2d) Return all the prime numbers in an array`);
console.log(`\n Arrow Function :\n Prime numbers in an array are :`)
let primeNumbersInArray = (a) => {
    a.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    console.log(number);
});
}
primeNumbersInArray(arr);

// Returning all the palindromes in an array by arrow function.
console.log(`\n2e) Return all the palindromes in an array`)
console.log(`\nArrow Function :\n palindromes in given array are`);

let palindromesInArray = function (a) {
    for(let i =0; i<a.length; i++) {
        revStr = a[i].split("").reverse().join("");
        if(a[i]===revStr) {
            console.log(a[i]);
        }
    }
}
palindromesInArray(arrStr);
