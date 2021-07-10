function getLongestWord(str) {
    let splitWords = str.split(' ');
    console.log(splitWords);
  
  
    let result = splitWords[0]
    for(let i = 1; i < splitWords.length; i++){
      let otherResult = splitWords[i]
      if(otherResult.length > result.length) {
        result = otherResult;
      }
    }
    return result;
  }