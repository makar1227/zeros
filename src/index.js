module.exports = function getZerosCount(number) {
  let result = 0;
  while(number>0){
      number =Math.trunc( number/5);
      result+=number;
  }
  return result;
}
