// ENUMS
enum eLoadingStates {
  loading = "Loading",
  loaded = "Loaded"
}

interface iPageStates {
  [eLoadingStates.loading]: string
  [eLoadingStates.loaded]: string
}

const thePageStates: iPageStates = {
  [eLoadingStates.loading]: "working on it",
  [eLoadingStates.loaded]: "Ready for you"
}


export const myEnum = (pageStates: iPageStates): void => {
  console.log([pageStates])
}

myEnum(thePageStates)

// Type Literlas
export const rollDice = (dice: 1|2|3): void => {
  console.log(Math.random() * (dice*100))
} 

rollDice(3)
rollDice(1)
rollDice(2)
// rollDice(5)  <<== Error only 1,2,3 are allowed

type tData = Record<string, number>
function myfunc (name: "addToCart", data: tData): void
function myfunc (name: "checkout", data: tData): void
function myfunc (name: string, data: unknown): void {
  console.log([name, data as tData])
} 

myfunc("checkout", {a:1})
myfunc("addToCart", {b:2, c:3})
// myfunc("new", {a:1}) <<== Error name only accepts "addToCart", "checkout"