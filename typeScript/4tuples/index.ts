// Sample 1
type threeDCoordinates = [x: number, y: number, z: number];

export const addThreeDCoordinates = (v1: threeDCoordinates, v2: threeDCoordinates) => {
  return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
};

console.log(addThreeDCoordinates([1, 2, 3], [10, 20, 30]));

// Sampel 2
type iState = [()=> string, (str: string)=> void]

export const myState = (initial?: string): iState=> {
  let thestate: string = initial || ''

  return[
    () => thestate,
    (str) => thestate = str 
  ]
}

const [g, s] = myState('Hamid')
console.log(g())
s("New Hamid")
console.log(g())

const [g2, s2] = myState()
console.log(g2())
s2("Some State")
console.log(g2())