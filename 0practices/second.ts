// foreach using reduce
export const myForeach = <T>(arr: T[], cb:(current: T) => void): void => {
  arr.reduce((acc, cv) => {
    cb(cv)
    return null
  }, null) 
}

myForeach([1,2,3], (cv) => console.log("Hello => ", cv))
myForeach(["hi", "my", "name"], (cv) => console.log("Hello => ", cv))
myForeach([{a: "yes"}, {a: 0}, {a: true}], (cv) => console.log("Hello => ", cv.a))

// filter using reduce
export const myFilter = <T>(arr: T[], cb:(cv: T) => boolean): T[] => {
 return arr.reduce(
  (acc, current) => (cb(current) ? [...acc, current] : acc), [] as T[]
 )
}

console.log(myFilter([1,2,3], (cv) => cv >= 2 ))
console.log(myFilter(["hi", "my", "name"], (cv) => cv==="my"))
console.log(myFilter([{a: "yes"}, {a: 0}, {a: true}], (cv) => cv.a!== "yes"))

// map using reduce
export const myMap = <T, U>(arr: T[], cb:(cv: T) => U): U[] => {
  return arr.reduce(
    ((acc, current) => [...acc, cb(current)]), [] as U[]
  )
}

console.log(myMap([1,2,3], (cv) => cv * 2 ))
console.log(myMap(["hi", "my", "name"], (cv) => cv=== `my - ${cv}`))
console.log(myMap([{a: "yes", b:12}, {a: 0, b:31}, {a: true, b:17}], (cv) => ({
  ...cv,
  b: 0
})))