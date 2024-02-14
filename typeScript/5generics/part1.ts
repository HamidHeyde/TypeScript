console.log('\n', '---------Generics 1---------', '\n');
// state function using Generics to include and supprt all types (number, ...)
type iState<T> = [() => T | null, (str: T) => T]

export const state =  <T>(initial?: T): iState<T> => {
  let theState: T | null= initial || null

  return [
    () => theState,
    (str) => theState = str
  ]
}

const [g1, s1] = state("Hamid")
console.log(g1())
s1("New Hamid")
console.log(g1())

const [g2, s2] = state()
console.log(g2() || "it's NULL")
s2("New Value After NUll")
console.log(g2())

const [g3, s3] = state(10)
console.log(g3())
s3(123)
console.log(g3())

// Overriding the T if not exist
const [g4, s4] = state<object | null>()
console.log(g4() || "it's NULL")
s4({a:4})
console.log(g4())

// Ranker Function
// Note: How Generic INTERFACE is used inside the Generic function 
// and How K has been interchanged betwwen the 2
interface TempItem<K> {
    item: K
    rank: number
}

export const ranker = <K>(items:K[], rankerFunction: (item: K) => number): K[]=> {
  return items
    .map( (item:K) => ({ item, rank: rankerFunction(item) }) )
    .sort( (a, b) => a.rank - b.rank)
    .map( (item: TempItem<K>) => (item.item))
}


const items = [
  {a: 'Hamid', b: 10},
  {a: 'Sophie', b: 8},
  {a: 'Shyleen', b: 9},
]

const rankerFunction = ({b, ...rest}: {a: string, b: number}) => b
console.log(ranker(items, rankerFunction))