// Make an array of numbers, then use .map() to return an array containing each of the original numbers + 1.
// Create an array of words. Use .map() to return an array of the same words in all uppercase
// let numbers = [5, 10, 15, 20, 25]
// let newNumbers = numbers.map(myFunction);
// function myFunction(number){
//     return number +1;
// }
// alert(newNumbers);
// const words= ['mom', 'dad', 'sister', 'brother']
// const newWords = words.map(word => word.toLocaleUpperCase())

// alert(newWords);var languages = ['HTML', 'CSS', 'Javascript'];
//to create an array of numbers you are incrementing by 5
// let count = [5, 30]
// for (let i = count[0]; i <= count[1]; i +=5){
//     console.log(i) 
// }
// //second example
// let count =[7, 50]
// let result = [];
// for (let i = count[0]; i <= count[1]; i +=7){
//     console.log(i)
//     result.push(i)
//     alert(result)
// }
// switch (a == b) {
//     case true
// }

// program to count the number of vowels in a string
// function countVowel(str) { 
//     // find the count of vowels
//     const count = str.match(/[aeiouAEIOU]/gi).length;
//     // // return number of vowels
//     return count;
// } 
// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// // switch(string){
// // case mixedCase: 
// // case lowerCase:
//     alert(`Your statement has ${result} vowels`);
// //     break;
// // case nullInput:
//     alert('Try again');
//     break;
// default:
//     alert('provide some value to check');

// // defining vowels
// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {
//     // initialize count
//     let count = 0;

//     // loop through string to test if each character is a vowel
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }
//     // return number of vowels
//     return count
// }
// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// alert(`Your statement has ${result} vowels`);

// detailed explanation
// words beginning with a vowel, add ay to the end
// words beginning with one or more consonants, move these
// consonants to the end, then add ay
// words beginning with "y", treat "y" as a consonant.
// non alphabet, do nothing

// request for user input

var str = prompt('please input some value: ')

const vowels = str.match(/[aeiou]/gi); 
const regex = /^[^aeiou]*/gi;

// for (i = 0; i < str.length; i++)
// document.write("<br/>"+str[i] + ' > ' + str[i].replace(regex, ''));
   
// const consonants = str.match(/^[^aeiou]*/gi);
if (str.length ==0){
    alert('kindly provide some value to continue');
}else if(Number.isInteger(str))
    {alert('your final output is ' +str, ' and does not change as it does not have a vowel or consonant');
}else if(str.charAt(0) == vowels)
    {alert('your final output is ' +str.concat('ay'));
} else {
    //check for multiple consonants
        for (var i = 0; i<str.length; i++){
            if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1){
                var firstcons = str.slice(0, i);
                var middle = str.slice(i, str.length);
                str = middle+firstcons+"ay";
                break;}
             }
     alert(str)}

// output the new word