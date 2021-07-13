//  if-else 
const scoredA=()=>{
    console.log('You have scored A grade');
}

const scoredB=()=>{
    console.log('You have scored B grade');
}

const scoredC=()=>{
    console.log('You have scored C grade');
}

var grade=(scored)=>{
    if(scored == 'A'){
        scoredA();
    }
    else if(scored == 'B'){
        scoredB();
    }
    else if(scored == 'c'){
        scoredC();
    }
}

grade('B');

// switch case 

grade = (scored)=>{
    switch(scored){
        case 'A':
            scoredA();
            break;
        case 'B':
            scoredB();
            break;
        case 'C':
            scoredC();
            break;
        default:
            console.log('No match found');
    }
}
grade('E');

// key-value

let grades = {
    'A': scoredA,
    'B': scoredB,
    'C': scoredC,
}

grade = (scored)=>{
    let a = grades[scored];
    a();
}
grade('A');

// Map

grades = new Map([
    ['A' , scoredA],
    ['B' , scoredB],
    ['C' , scoredC],
])

grade = (scored)=>{
    let a = grades.get(scored);
    a();
}
grade('C');
