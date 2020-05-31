const arrayIsMirror = array => {
    let index = 0
    let reverseIndex = array.length - 1
    while(index < reverseIndex){
      if (array[index] !== array[reverseIndex])
        return false
      index++
      reverseIndex--
    }
    return true
  }
  
  const treeLevelIsSymmetrical = (array, level) => {
    const indexStartLevel = Math.pow(2,level) - 1
    const indexEndsLevel = Math.pow(2,level+1) - 1
    const arrayLevel = array.slice(indexStartLevel, indexEndsLevel)
    return arrayIsMirror(arrayLevel)
  }
  
  const symmetricalLength = number => {
    const isPowerOfTwo = (Math.log(number+1)/Math.log(2)) % 1 === 0;
    return isPowerOfTwo
  }
  
  function SymmetricTree(strArr) { 
    if(!symmetricalLength(strArr.length))
      return false
    let currentlevel = 0
    let arrayLevels = Math.log(strArr.length+1)/Math.log(2)
    while(currentlevel < arrayLevels){
      if(!treeLevelIsSymmetrical(strArr,currentlevel))
        return false
      currentlevel++
    }
    return true
  }
     
  // keep this function call here 
  console.log(SymmetricTree(readline()));