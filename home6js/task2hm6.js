
function newFun (num) 
{ 
  console.log (num)
     if (num <=0){
      return 'Function End after 0'
    }
    else {
      return newFun(num-1);
    }
}
 console.log(newFun(5))