class Formatter {

  static capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }

  static sanitize(sentence) {
    return sentence.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  // static titleize(sentence) {
  //   let exemptionWords = ["a", "an", "but", "of", "and", "for", "at", "by", "from"]
  //   let arrayOfWords = sentence.split( " " )
  //   let newSentenceArray = []
  //   let newSentence = arrayOfWords.map( e => {
  //     for(let i = 0; i < exemptionWords.length; i++) {
  //       if(e === exemptionWords[i]) {
  //         newSentenceArray.push(e)
  //       } else {
  //         let capWord = e.charAt(0).toUpperCase() + e.slice(1)
  //         newSentenceArray.push(capWord)
  //       }
  //     }
  //   })
  //   console.log(newSentence)
    
  // }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }



}