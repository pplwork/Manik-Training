// Training

// for loops

//  1. Simple for loop

const For = ()=>{
    var arr = ['6' , '5' , '1' , '10'];
    for(var i = 0;i<arr.length;i++){
    console.log("The number is " , arr[i]);
}
}
//  2. for...in loop

const Forin=()=>{
    var address = {
    house : '384',
    street: '2750 Oak Ridge Drive',
    city: 'Wolcott',
    State: 'New York',
    zipCode: '14590'
    }

    for(var i in address){
    console.log(i +': ' , address[i]);
    }
}


//  3. for...of loop
const Forof=()=>{
    var name = 'Manik Arora'
    for(var i of name){
    console.log(i);
    }
}

//  while loop
var a = 2;

const While = ()=>{
    while(a<5){
        console.log(a);
        a++;
    }
}

// do...while loop
a = 10;
const doWhile = ()=>{
    //  ex-1
    do{
        console.log(a);
        a++;
    }while(a<14)

    //  ex-2 
    do{
        console.log('Hello');
    }while(a<5)
}


// function calls
For();
Forin();
Forof();
While();
doWhile();