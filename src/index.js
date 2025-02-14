module.exports = function toReadable(number) {
  const digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let num = number % 10;
  if (number <= 20) return digit[number];
  if (number < 100) return tens[parseInt(number / 10)] + (num ? ' ' + digit[num] : '');
  if (number < 1000) return digit[parseInt(number / 100)] + ' hundred' + (number % 100 == 0 ? '' : ' ' + toReadable(number % 100));
}
