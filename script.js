// exe 1
// Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
// console.log(calFahrenheit(20)) //68

function calFahrenheit(c){
    return c*9/5 + 32;
}
console.log(calFahrenheit(20));

// exe 2
// Write a function to reverse a number
// console.log(reverseNum(123)) //321


/* function reverseNum(num) {
    let arr = num.toString().split("");
    let arr2 = [];
    for(let i=0; i<arr.length; i++){                <---- ეს რატომ არ მუშაობს?
        arr2.push(arr[arr.length-i-1]);
    }
    arr2.join("");
    return parseInt(arr2);
}*/


function reverseNum(num){
    return parseInt(num.toString().split("").reverse().join(""));
}

console.log(reverseNum(123));

// exe 3
// Count number of Vowels in String
// Function `countVowel` returns the number of vowels in input string.
// console.log(countVowel("Hello")) //2

function countVowel(str){
    let count = 0;
    let lowerCase = str.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    for(let i=0; i<lowerCase.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(lowerCase[i]===vowels[j]){
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(countVowel("Hello"));

// exe 4
// Write a function to check if an input string is a palindrome
// Function `checkPalindrome` return a boolean value based on whether the input string is palindrome or not.
// a palindrome is a word, phrase or number which reads the same backwards as it does when being read forwards.
// console.log(findPalindrome("racecar")) //true

function checkPalindrome(element){
    let arr = element.toString().split("");//იმ შემთხვევისთვის როცა ელემენტს რიცხვად მოგვცემენ
    let count = 0;
    if(arr.length%2==1){
        for(let i=0; i<(arr.length-1)/2; i++){
            if(arr[i]==arr[arr.length-i-1]){
                count++;
            }
        }
        if(count==(arr.length-1)/2){
            return true;
        }else{
            return false;                                       //აქ ვეცადე ციკლები რაც შეიძლება პატარა გამოსულიყო და მაგიტომ კოდი უფრო                                                             
        }                                                       // დიდი გამოვიდა და ჯობდა რომ კოდი პატარა ყოფილიყო და ციკლი უფრო დიდხნიანი?
    }else{
        for(let i=0; i<arr.length/2; i++){
            if(arr[i]==arr[arr.length-i-1]){
                count++;
            }
        }
        if(count==arr.length/2){
            return true;
        }else{
            return false;
        }
    }
}

console.log(checkPalindrome("racecar"));

// exe 5
// Write a function to generate a random number
// Function `genRandom` return a generated random integer number between the provided start and end range.
// console.log(genRandom(1,10)) // random int between 1 to 10

function genRandom(a, b){
    return Math.floor(Math.random() * b) + a;
}

console.log(genRandom(1,10));

// exe 6
// Write a function to find Factorial of a number
// Function `getFactorial` return the factorial of a number using the formula `n*(n-1)*(n-2)*…` .
// console.log(getFactorial(5)) // 120

function getFactorial(n){
    let factorial = n;
    for(let i=1; i<n-1; i++){
        factorial=factorial*(n-i);
    }
    return factorial;
}
console.log(getFactorial(5));

// exe 7
// Write a function to add unlimited numbers
// Function `addNumber()` return the sum of all the number passed as arguments of the function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// console.log(addNumber(10,45,34,130)) // 219

function addNumber(){
    let sum=0;
    for(i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(addNumber(10,45,34,130));
