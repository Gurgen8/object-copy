

////// ex-1

var cars = {
3: {
name: "volvo",
price: 2500000,
},
4: {
name: "toyota",
price: 40000,
},
0: {
name: 'bmw',
price: 5000,
},
1: {
name: 'mersedes',
price: 4000,
},
2: {
name: 'audi',
price: 1000000,

}
}


function brand(n){
    for(i in cars  ){
        if(n===cars[i].name){
        return cars[i].price
    }else if(typeof(n)!=="string"  ){
        return "enter of brand car"
    }
    }
}






///////// function --clone--ex--2


function copy(obj) {
    var objCopy = {}; 
    var key;
  
    for (key in obj) {
      objCopy[key] = obj[key]; 
    }
    return objCopy;
  }
  


