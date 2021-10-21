const int: number = 5;
const bool: boolean = false;
const boolT: boolean = true;

const num: number = 4.3;
const num1: number = 3e10;

const str1: string = 'Hello TypeScript';

const array: number[] = [1, 1, 2, 3, 5, 8, 13];
const array2: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ['hello', 'TypeScript'];
const words1: Array<string> = ['hello', 'TypeScript']  //<string> - generics;

// Tuple 
const contact: [string, number] = ['Vitaliy', 375299043364];

// Any 

let variable: any = 29;
variable = 'Vitaliy';

// Function

function sayMyName(name: string): void {  //The function returns nothing
  console.log(name);
}
sayMyName('Vitaliy');

// Never

function infinite(): never {
  while(true) {

  }
}

// Type 

type login = string;
const name1: login = 'Victoria';

type ID = string | number;
const id: ID = 123;
const id2: ID = '123';

type someType = null | string | undefined;
