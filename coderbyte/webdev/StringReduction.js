const letters = {
    ab: 'c',
    ba: 'c',
    ca: 'b',
    ac: 'b',
    bc: 'a',
    cb: 'a',
  }
  
  // travels string making groupings of two letters
  const travelStr = (str) => {
    let newStr = ''
    for (let i = 0; i<str.length; i = i+2){
      if(str[i+1]){ // if two letters left in str
        const twoLetters = str[i]+str[i+1]
        if(letters[twoLetters]){
          newStr += letters[twoLetters]
        }else{ // twoLetters is two of the same letter
          newStr += twoLetters
        }
      }else{ // add last letter
        newStr += str[i]
      }
    }
    return newStr
  }
  
  
  const selectSmallestTravel = (str) => {
    const str1 = travelStr(str)
    const str2 = str[0]+travelStr(str.slice(1)) // str2 tries travelStr starting at second letter to cover both cases: 'aab' and 'baa'
    if(str1.length > str2.length)
      return str2
    else
      return str1
  }
  
  function StringReduction(str) {
    let newStr = selectSmallestTravel(str)
    while(str.length !== newStr.length) {
      str = newStr
      newStr = selectSmallestTravel(str)
    } // stops when string can't be reduced further
    return str.length
  }
     
  // keep this function call here 
  console.log(StringReduction(readline()));
  