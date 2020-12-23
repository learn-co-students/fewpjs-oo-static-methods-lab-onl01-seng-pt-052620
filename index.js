class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let titleized = [];
    let words = sentence.split(' ');

    words.forEach(function(word) {
      if (word == words[0]) {
        titleized.push(Formatter.capitalize(word))
      } else {
        if (exceptions.includes(word)) {
          titleized.push(word)
        } else {
          titleized.push(Formatter.capitalize(word))
        }
      }
    })
    return titleized.join(' ')
  }
}