//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(your_string, your_list){

    const noPunc = your_string.substring(0,your_string.length-1) //for ending punctuation
    const myArray = noPunc.split(' ')
    const again = myArray.join(',')
    const last = again.split(',')

    for(let i = 0; i < last.length; i++){
        for(let j = 0; j < your_list.length; j++){
            if(your_list[j].toLowerCase() == last[i].toLowerCase()){
                let answer = 'matched ' + your_list[j]
                console.log(answer)
            }
            else{
                console.log('No Matches')
            }
        }
    }
}
//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(list){
    for(let i = 0; i < list.length; i++){
        if(i % 2 == 0){
            arr[i] = "even index"
        }
    }
}

replaceEvens(arr)

console.log(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Codewars #1:

//Write a function to determine if a number is prime:

function isPrime(aNum){
    var answer = false
    if(aNum > 3){
        for(let i = 2; i < ((Math.floor(aNum ** 0.5)) + 1); i++){
            if( aNum % i == 0){
                answer = false
                break
            }
            else{
                answer = true
            }
        }
    }
    else if(aNum == 2 || aNum == 3){
        answer = true
    }
    return answer
    
}

// Codewars #2
//Given an integral number, determine if it's a square number:

function is_square(n){
    return (n >= 0) && (n**0.5) % 1 == 0
}

//codewars #3
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript
function DNA_strand(dna){
    let lower = dna.toLowerCase()
    let complement = []
    for(let i =0; i < dna.length; i++){
        (lower[i] == 'a') ? complement.push('T'): 
        (lower[i] == 't') ? complement.push('A'): 
        (lower[i] == 'c') ? complement.push('G'): 
        (lower[i] == 'g') ? complement.push('C'): 
        console.log('???')
    }
    return complement.join('')
}

//codewars #4
//This code does not execute properly. Try to figure out why.
https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
function multiply(a, b){
    return a * b
  }




