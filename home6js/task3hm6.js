
//Task3
//isNaN(denominator)

function devide(numerator,denominator){
try{ 
if(denominator === 0 || isNaN(numerator) || isNaN(denominator))
{return console.log("Некоретні введені дані")}
else
{return console.log(numerator/denominator)}
}
catch (err)
{
{console.log ('Помилка')}
}
finally {
  {console.log('Робота завершена!')}
  }
}
devide(5,0);

