class Person{
    constructor(name ,age , salary , sex){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sex = sex;
    }
    static sort(arr , field , order){
        let arr1 = [...arr];
        quickSort(arr1 , 0 , arr1.length-1 , field);
        if(order != 'asc'){
            arr1.reverse();
        }
        return arr1;
    }
}
function quickSort(arr , low , high , field){
    if(low < high){
        let pi = partition(arr , low , high , field);
        quickSort(arr ,low , pi-1 , field);
        quickSort(arr , pi+1 , high , field);
    }
}
function partition(arr,low,high,field){
    let pivot = arr[high];
    let i =low-1;
    console.log(low , high);
    for(j = low; j<=high-1;j++){
        if(arr[j][field]<pivot[field]){
            i++;
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            
        }
    }
    i++;
    let temp = arr[high];
    arr[high]=arr[i];
    arr[i]=temp;
    return i;
}

let Persons = [['Manik',20,150000,'Male'],
            ['Sagnik',30,10000,'Male'],
            ['Shreya' , 21, 50000,'Female'],
            ['Naman',18 , 200000,'Male'],
            ['Saumya' , 40 , 70000,'Female']];
let arr =[];
Persons.forEach((person) => {
    arr.push(new Person(...person))
});
const Ans = Person.sort(arr,'salary','asc');
console.log(Ans);
