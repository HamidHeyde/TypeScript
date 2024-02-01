// function with args and return type
export const addNumbers = (a: number, b: number): number => a + b;
console.log(addNumbers(2, 3));

export const concatStrings = (a: string, b?: string): string =>
  !!b ? `${a} - ${b}` : `${a}`;
console.log(concatStrings('hello'));
console.log(concatStrings('hello', 'you'));

export const concatMultiStrings = (a: string, ...args: string[]): string => {
  if (!args || !args.length) return `${a}`;

  return `${a} - ${args.join(' * ')}`;
};
console.log(concatMultiStrings('hello'));
console.log(concatMultiStrings('hello', 'to', 'you'));

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);
console.log(fetchData('www.google.com'));
