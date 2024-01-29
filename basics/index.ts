/** String, Number, Boolean, Regex */
const theStringVariable: string = "Hamid";
let theNumberVariable: number = 1;
let theBooleanVariable: boolean = true;
let theRegexVariable: RegExp = /Lorem Ipsum/;

/** Arrays */
let myValues: number[] = [1, 2, 3];
let myValues2: Array<string> = ["a"];

/** Objects */
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Hamid",
  last: "Heidarzadeh",
};

const data: Record<number, string> = {
  10: "me",
  20: "myBaby",
};

/**
 * In some cases typescript can infer on its own
 * There is no need to assign the type
 *
 * e.g. for map functionality, you could update the return value
 * anyhow you see fit and typescript will adapt itself to it. However,
 * if you assign a type, you sould make sure it always matches the returned value.
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

myValues.forEach((a) => console.log(a));

let multipliedValues = myValues.map((a) => a * 10);
let myStringArray = myValues.map((a) => `${a * 10}`);
