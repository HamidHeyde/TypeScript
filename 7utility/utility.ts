// PARTIAL
interface iproduct {
  name: string,
  color: string,
  company?: string
}

//  for TYPES
type iproductOptionals = Partial<iproduct>

// for INTERFACES
interface newP extends Partial<iproduct> {}

export const merge = (product: iproduct, overrides:iproductOptionals): iproduct => {
  return ({
    ...product,
    ...overrides
  })
}

console.log(merge({name: 'toy', color: 'blue', company: 'tyysrus'},{company: 'me12432'}))

// REQUIRED
type requiredFields= Required<iproduct>
interface iRequiredFields extends Required<iproduct> {}

export const myRequired = (product: requiredFields): void => {
  console.log([product])
}

myRequired({name: "new toy", color: "orange", company: 'myCompany'})

// PICK
type tPick = Pick<iproduct, "name" | "color">

export const myPick = (product: tPick): void => {
  console.log([product])
}

myPick({name: "pick toy", color: "pick color"})

// OMIT
type tOmit = Required<Omit<iproduct, "color">>

export const myOmit = (product: tOmit): void => {
  console.log([product])
}

myOmit({name: "Omit product", company: "Omit Company"})

// Record
type tRecord = Record<string, number>
interface iRecord extends Record<string, number> {}

export const myRecord = (product: tRecord): void => { console.log([product])}

myRecord({a:1, b: 2})
myRecord({greetings: 1, sayHello: 2, sayGoodBye: 3})
