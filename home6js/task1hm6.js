//Task1

function handleNum (a, handleEven, handleOdd) {
  if (a % 2 === 0)
  {return handleEven()
  } //
  else
  {return handleOdd()
  }
};
handleNum (10, handleEven,handleOdd) 

function handleEven (){
  console.log ('Number is Парне');
  return;
};

function handleOdd  (){
  console.log ('Number is НеПарне');
  return;    
};