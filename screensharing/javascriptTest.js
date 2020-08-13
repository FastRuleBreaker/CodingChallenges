// Write a function that accepts a phrase as a string, and generates an acronym of it.

// Constrains:
// - Output length: 2-4 character
// - Output should be all capital letters

// Examples:
// Application Performance -> AP
// The Department of Homeland Security -> DHS
// Texas -> TXS
// Dogs -> DS
// US Air Force -> USAF

// Edge case:
// W C D E R

const bannedWords = ['The', 'of']

function foo(phrase: string): string {
  let arrayWords = phrase.split(' ');
  arrayWords = arrayWords.filter((word)=>!bannedWords.includes(word))
  let arrayLetters;
  if(arrayWords.length === 1){
    arrayLetters = arrayWords[0].split('')
    arrayLetters = arrayLetters.filter((letter, index) => {
      if(index===0)
        return true;
      if(index===arrayLetters.length-1)
        return true
      if(index===(Math.floor(arrayLetters.length/2)))
        return true
    })
  } else {
    arrayLetters = arrayWords.map((word)=>{
      return word.split('').filter((letter, index)=>{
        if(index===0) return true;
        if(letter.toUpperCase() === letter) return true;
      }).join('')
      });
  }
  let acronym: string = arrayLetters.join('').toUpperCase();
  if(acronym.length>4){
    acronym = acronym.slice(0,4)
  }
  return acronym;
}

console.log(foo('Application Performance'))
console.log(foo('The Department of Homeland Security'))
console.log(foo('Texas'))
console.log(foo('US Air Force'))
console.log(foo('W C D E R'))