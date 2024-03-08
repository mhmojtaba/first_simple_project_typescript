let number: number = 10
const st:string = "string"
let any;

const arr:number[] = [1,2,3]
const arr2:string[] = ["string", "number"]
const arr3 = ["string", "str2", 5 , 6 , true]

const tup:[string, number] = ["string", 10 ]


enum Statuses {
    Ok = 200,
    Bad = 400,
    sent = 201
}

// enum 2

const enum statuses2{
    Ok = 200,
    Bad = 400,
}

// union 

type Union = string | number;
const value: Union = 5;

// literal types


type Status = 'Open' | 'Close'; // type alias
const marketStatus : Status = 'Close';

// functions

function str(id:string) {
    console.log(id)
}

function add(a:number, b:number) {
    return a + b;
}

// declaring a variable as a function
let res : (id:string) =>void;

// initializing a variable with a function
res  = str;


// ////////////////
const input = document.querySelector('.inp')! as HTMLInputElement;
input.value = '20';
// ///////////

interface Options {
    [key : string | number ]: string | number;
}