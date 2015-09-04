function zerofix(num){
  if(num < 10){
    return "0" + String(num);
  } else {
    return String(num);
  }
}
