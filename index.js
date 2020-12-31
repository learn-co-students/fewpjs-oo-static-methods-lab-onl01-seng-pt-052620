class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let words = string.split(" ")
    let modifiedWords = []

    let first = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    modifiedWords.push(first)

    for(let i=1; i < words.length; i++) {
      if(!(words[i].match(/^(the|a|an|but|of|and|for|at|by|from)$/))) {
        modifiedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
      } else {
        modifiedWords.push(words[i])
      }
    }
    return modifiedWords.join(" ")
  }
}
