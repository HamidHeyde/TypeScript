import { 
  addNumbers,
  concatStrings,
  concatMultiStrings,
  fetchData
} from "./functions";

console.log(
  addNumbers(2,3), '\n',
  concatStrings("hello"), '\n',
  concatStrings("hello", "you"), '\n',
  concatMultiStrings("hello"), '\n',
  concatMultiStrings("hello", "to", "you"), '\n',
  fetchData("www.google.com"), '\n'
)