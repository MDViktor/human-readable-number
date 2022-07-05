module.exports = function toReadable (number) {
  const firstTen = 'zero one two three four five six seven eight nine';
    const secondTen = 'ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen';
    const firstHundred = 'zero ten twenty thirty forty fifty sixty seventy eighty ninety';
    if ((number/10) < 1) {return firstTen.split(' ')[number];}
      else if ((number/10) >= 1 && (number/10) < 2) {return secondTen.split(' ')[number-10];}
      else if (number%10 === 0) {return `${firstHundred.split(' ')[Math.floor(number/10)]}`;}
      else if ((number/10) > 2 && (number/10) < 10) {return `${firstHundred.split(' ')[Math.floor(number/10)]} ${firstTen.split(' ')[number-(Math.floor(number/10)*10)]}`;}
      else if (number%100 === 0) {return `${firstTen.split(' ')[Math.floor(number/100)]} hundred `;}
      else if ((number/100) > 1 && (number/100) < 10) {
        if (Math.floor(number%100) >= 1 && Math.floor(number%100) < 10) {return `${firstTen.split(' ')[Math.floor(number/100)]} hundred ${firstTen.split(' ')[number - (Math.floor(number/100)*100)]}`;}
          else if (Math.floor(number%100) >= 10 && Math.floor(number%100) < 20) {return `${firstTen.split(' ')[Math.floor(number/100)]} hundred ${secondTen.split(' ')[number - (Math.floor(number/100)*100) - 10]}`;}
          else if (((number - ((Math.floor(number/100))*100))%10) === 0) {return `${firstTen.split(' ')[Math.floor(number/100)]} hundred ${firstHundred.split(' ')[(number - (Math.floor(number/100)*100))/10]}`;}
      }

}
// 1-99, 100,200...900- n01-n09+, n11-n19 +
