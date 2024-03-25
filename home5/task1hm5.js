function areaRectangle (width,height) {
    const result = width*height
      
    return console.log ('Площа прямокутника '+ result);
    
}
areaRectangle(5,10)



// function expression
const areaNew = function (width,height) {
    return width*height  
}
const countRectangle = areaNew(5,10)
console.log ('Площа прямокутника '+ countRectangle);



// arrow function
const areaRectangle1 = (width,height) =>
{
    const area = width*height
    return area  
}
const count1 = areaRectangle1(5,10)
console.log ('Площа прямокутника '+ count1);