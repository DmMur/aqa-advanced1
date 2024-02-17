function checkOrder (available, order){
    
    if (available < order)
    { console.log ("Your order is too large, we don't have enough goods.") 
    }  
    else if (order == 0) 
    { console.log ('Your order is empty')
    }
    else
    {console.log('Your order is accepted')
    } 

   return checkOrder 
}
checkOrder (100,0) //  order=0
checkOrder (10,100) // availible < order
checkOrder (100,10) // availible > = order