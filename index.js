// q. Write a function called capitalizeWords that takes a sentence as input and returns the same sentence with each word capitalized 
// (i.e., the first letter of each word should be uppercase).


// capitalizeWords("hello world"); // Expected output: "Hello World"
// capitalizeWords("this is a test"); // Expected output: "This Is A Test"
// capitalizeWords("javascript is awesome"); // Expected output: "Javascript Is Awesome"

const capitalizeWords=(string)=>{
    let word = string.split(' ');
    let arr = [];
    let unique;
    for(let i=0;i<word.length;i++){
        unique= word[i]?.charAt(0)?.toUpperCase();
       arr.push(unique + word[i].slice(1))
    }
    return arr.join(' ');
}
console.log(capitalizeWords("this is a test"))
