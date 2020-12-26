class Formatter {
  //add static methods here
  static capitalize(word){
    let x = word.split("")
    let a = x[0].toUpperCase()
    x[0] = a
    return x.join("")
  }

  static sanitize(word){
    return word.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let referenceList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = string.split(' ')
    for (let i = 0; i < array.length; i++){
      if (i === 0){
        let z = array[i].split('')
        z[0] = z[0].toUpperCase()
        array[0] = z.join('')
      } else {
        if (referenceList.find( x => x === array[i])) {

        } else {
          let r = array[i].split('')
          r[0] = r[0].toUpperCase()
          array[i] = r.join('')
        }
      }
    }
    return array.join(' ')
  }
}