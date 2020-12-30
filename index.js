class Formatter{
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1) 
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [] 
    let words = string.split(" ")
    for (let index = 0; index < words.length; index++) {
      if(index==0){
        result.push(this.capitalize(words[index]))
      } else {
        if(exceptions.includes(words[index])){
          result.push(words[index])
        } else { 
          result.push(this.capitalize(words[index]))
        }
      }
      
    }
    return result.join(" ") 
  }
}