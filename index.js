class Formatter {
  //add static methods here
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9-'+\s]+/g, '');
  }

  static titleize(sentence) {
    let phrase = sentence.split(" ");
    let newPhrase = [];
    for(let i = 0; i < phrase.length; i++)
    {
      if (i === 0){
        newPhrase[i] = this.capitalize(phrase[i])
      }
      else if (phrase[i] === 'the' || phrase[i] === 'a' || phrase[i] === 'an' || phrase[i] === 'but' ||
      phrase[i] === 'of' || phrase[i] === 'and' || phrase[i] === 'for' || phrase[i] === 'at' || phrase[i] === 'by' || 
      phrase[i] === 'from') {
        newPhrase[i] = phrase[i];
      }
            else {
              newPhrase[i] = this.capitalize(phrase[i])
            }
    }
    return newPhrase.join(" ");
  }
}