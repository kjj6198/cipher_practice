function add(num1, num2) {
  num1 = parseInt(num1,10) || 0;
  num2 = parseInt(num2,10) || 0;

  if(arguments.length > 2) {
    throw new TypeError("參數只能有兩個！");
  }

  return num1 + num2;
}

function Dictionary (word) {
  this.word = word;
}

Dictionary.prototype.translate = function(word) {
  if(typeof word !== 'string') {
  	throw new TypeError('輸入非字串');
  }
  return word;
};