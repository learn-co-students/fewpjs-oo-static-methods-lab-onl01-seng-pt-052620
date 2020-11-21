class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let stringArray = string.split(' ');
    let titlizedArray = []
    const nonTitleWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    titlizedArray.push(Formatter.capitalize(stringArray[0]));
    for(let i = 1; i < stringArray.length; i++) {
      if(!nonTitleWords.includes(stringArray[i])) {
        titlizedArray.push(Formatter.capitalize(stringArray[i]))
      } else {
        titlizedArray.push(stringArray[i]);
      }
    }
    return titlizedArray.join(' ');
  }
}