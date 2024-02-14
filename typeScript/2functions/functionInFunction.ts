// callbacks
const someFunctionWithCallBack = (
  text: string,
  cb: (t: string) => void
): void => {
  console.log('someFunctionWithCallBack');
  cb(text);
};

someFunctionWithCallBack('tesing', (text) => console.log(text));

// call back like map, reduce, filter, etc
type MutationFucntion = (v: number) => number;
const mutateArray = (arr: number[], cb: MutationFucntion): number[] => {
  return arr.map(cb);
};

console.log(mutateArray([1, 20, 3], (v) => v * 10));

// closures
const adder = (v: number): MutationFucntion => {
  const addNumebr = (t: number) => {
    return v + t;
  };

  return addNumebr;
};

const oneAdder = adder(1);
const twoAdder = adder(2);

console.log(oneAdder(3));
console.log(twoAdder(3));
