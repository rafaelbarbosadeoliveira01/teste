function checkCard(num){
var msg = Array();
var tipo = null;
if(num.length > 16 || num[0]==0){
  return false;
} else {
  var total = 0;
  var arr = Array();
  for(i = 0;i < num.length;i++){
    if(i % 2 == 0){
      dig = num[i] * 2;
      if(dig > 9){
        dig1 = dig.toString().substr(0,1);
        dig2 = dig.toString().substr(1,1);
        arr[i] = parseInt(dig1)+parseInt(dig2);
      } else {
        arr[i] = parseInt(dig);
      }   
      total += parseInt(arr[i]);
    } else {
      arr[i] =parseInt(num[i]);
      total += parseInt(arr[i]);
    } 
  }
}
if(msg.length>0){ 
  return false;
}else{
    if(total%10 == 0){
      return true;
    }else{
      return false;
    }
  }
}