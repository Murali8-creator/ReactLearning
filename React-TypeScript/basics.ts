//primitives : number,string,boolean
//more complex types : arrays, objects
//function types,parameters


//Primitives
let age: number;
age=12;

let userName: string;
userName='max';

let isInstructor: boolean;
isInstructor=true;


//more complex types
let hobbies: string[];
hobbies:['sports','cooking'];

let person: {
    name: string,
    age: number
};

person = {
    name: 'Max',
    age:32
};

// person = {
//     isEmployee : true
// }

let people : {
    name: string,
    age: number
}[];

//Type inference
//A union type is a type definition that allows more than one type.
let course: string | number = "React - The Complete Guide";
course = 12345; //error  - the number is not assignable to type string


type Student = {
    studentName: string | string[];
    age: number;
}

let student: Student;

let students: Student[];


//Functions & Types

function add(a: number , b:number){
    return a+b;
}

function printOutput(value: any){
    console.log(value);
    
}

//Generics
function insertAtBeginning<T>(array : T[],value: T){
    const newArray =[value, ...array];
    return newArray;
}

const demoArr = [1,2,3];
const updatedArray = insertAtBeginning(demoArr, 0);
// updatedArray[0].split('');
const stringArray = insertAtBeginning(['a','b','c','d'],'d');
stringArray[0].split('');


