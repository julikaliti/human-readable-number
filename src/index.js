module.exports = function toReadable (number) {
    if (number === 0) {return 'zero';}
    
    if (number > 0 && number <= 19) {
      return units(number);
    }
    
    if (number > 19 && number <= 99) {
      return tenth(number);
    }
    
    if (number >= 100 && number <= 999) {
      var str = units(Math.floor(number/100)) + ' hundred';
      if (number%100 == 0) {
        return str;
      } else if ((number%100 > 0) && (number%100 <=19)) {
          str += ' ' + units(number%100);
          return str;
      } else {
        str += ' ' + tenth(number%100);
        return str;
      }
    }
}
  
function units(number) {
    let a =[, 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    unit = a[number];
    return unit;
}
  
function tenth(number) {
  let b =[, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];
  if (number%10 !== 0) {
    tens = b[Math.floor(number/10)] + ' ' + units(number%10);
    } else {
      tens = b[Math.floor(number/10)];
  }
  return tens;			
  }
  